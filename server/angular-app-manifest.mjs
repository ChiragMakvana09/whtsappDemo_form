
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ChiragMakvana09.github.io/whtsappDemo_form/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/whtsappDemo_form"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 554, hash: '0148ce87a8e15b5391cea9f8027f66f96f02c3bc34b0adc9ef8cdc39fe4a3856', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1067, hash: 'b72ab4caffb0b996798d6b190849d91ae9bde7fef3dd409707e351f6b93a95bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19464, hash: '0cb2053cb64190a1773672eea03a1eb58a996dee9ed0082dbdc4d048df33ff5f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
