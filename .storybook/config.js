import { configure } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const cache = {};

  function importAll (r) {
    r.keys().forEach(key => cache[key] = r(key));
  }

  importAll(require.context('../', true, /\.story\.js$/));
  // At build-time cache will be populated with all required modules.
}

configure(loadStories, module);
