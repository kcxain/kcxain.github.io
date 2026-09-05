"""Checks for build-time stats loading and failure recovery."""
import io
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from fetch_contribution_stats import fetch_snapshot


class StatsSnapshotTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.output = Path(self.directory.name) / 'stats.json'
        self.old = {'google_scholar': {'citations': 0}, 'github': {'stars': 503},
                    'zhihu': {'followers': 4816, 'upvotes': 13755}}
        self.output.write_text(json.dumps(self.old))
        self.original = self.output.read_bytes()

    def test_valid_snapshot_replaces_cached_values(self):
        fresh = {**self.old, 'github': {'stars': 504}}
        with patch('fetch_contribution_stats.urlopen', return_value=io.BytesIO(json.dumps(fresh).encode())):
            self.assertTrue(fetch_snapshot('owner/repo', self.output))
        self.assertEqual(json.loads(self.output.read_text()), fresh)

    def test_network_failure_preserves_exact_cached_file(self):
        with patch('fetch_contribution_stats.urlopen', side_effect=TimeoutError('offline')):
            self.assertFalse(fetch_snapshot('owner/repo', self.output))
        self.assertEqual(self.output.read_bytes(), self.original)

    def test_invalid_remote_values_preserve_cached_file(self):
        for value in [None, True, -1, '503']:
            bad = {**self.old, 'github': {'stars': value}}
            with self.subTest(value=value), patch('fetch_contribution_stats.urlopen', return_value=io.BytesIO(json.dumps(bad).encode())):
                self.assertFalse(fetch_snapshot('owner/repo', self.output))
                self.assertEqual(self.output.read_bytes(), self.original)

    def test_malformed_remote_json_preserves_cached_file(self):
        with patch('fetch_contribution_stats.urlopen', return_value=io.BytesIO(b'<html>error</html>')):
            self.assertFalse(fetch_snapshot('owner/repo', self.output))
        self.assertEqual(self.output.read_bytes(), self.original)

    def test_missing_fallback_fails_build(self):
        self.output.unlink()
        with patch('fetch_contribution_stats.urlopen', side_effect=TimeoutError('offline')):
            with self.assertRaises(FileNotFoundError):
                fetch_snapshot('owner/repo', self.output)

    def test_invalid_fallback_fails_build(self):
        self.output.write_text('{}')
        with patch('fetch_contribution_stats.urlopen', side_effect=TimeoutError('offline')):
            with self.assertRaises(ValueError):
                fetch_snapshot('owner/repo', self.output)


if __name__ == '__main__':
    unittest.main()
