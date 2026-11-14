"""Verify counts survive source failures without becoming zero or falsely fresh."""
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from update_profile_stats import refresh, parse_int


class ProfileStatsTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.path = Path(directory.name) / 'stats.json'
        self.old = {'google_scholar': {'citations': 80, 'updated_at': 'old'},
                    'zhihu': {'followers': 5280, 'updated_at': 'old'}}
        self.path.write_text(json.dumps(self.old))

    def test_both_failures_keep_values_and_timestamps(self):
        with patch('update_profile_stats.update_google_scholar', side_effect=RuntimeError('offline')), \
             patch('update_profile_stats.update_zhihu', side_effect=RuntimeError('offline')):
            self.assertEqual(refresh(self.path), self.old)

    def test_partial_success_updates_only_successful_source(self):
        def update(stats):
            stats['zhihu']['followers'] = 5300
        with patch('update_profile_stats.update_google_scholar', side_effect=RuntimeError('blocked')), \
             patch('update_profile_stats.update_zhihu', side_effect=update):
            result = refresh(self.path)
        self.assertEqual(result['google_scholar'], self.old['google_scholar'])
        self.assertEqual(result['zhihu']['followers'], 5300)
        self.assertNotEqual(result['zhihu']['updated_at'], 'old')

    def test_invalid_result_keeps_previous_value(self):
        def update(stats):
            stats['google_scholar']['citations'] = -1
        with patch('update_profile_stats.update_google_scholar', side_effect=update), \
             patch('update_profile_stats.update_zhihu', side_effect=RuntimeError('offline')):
            self.assertEqual(refresh(self.path), self.old)

    def test_parser_accepts_zero_and_grouped_counts_only(self):
        self.assertEqual(parse_int('5,280'), 5280)
        self.assertEqual(parse_int(0), 0)
        for value in (True, -1, 1.5, '-3', 'error 403', None):
            self.assertIsNone(parse_int(value))


if __name__ == '__main__':
    unittest.main()
