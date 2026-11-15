// Preserve symbol IDs, accessible labels, viewBoxes and individual logo paths.
export default {
  multipass: true,
  plugins: [{
    name: 'preset-default',
    params: {
      overrides: {
        cleanupIds: false,
        removeHiddenElems: false,
        mergePaths: false,
        removeUnknownsAndDefaults: false,
      },
    },
  }],
};
