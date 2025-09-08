
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/whtsappDemo_form/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/whtsappDemo_form"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 521, hash: 'a3ccee34900572a7568389d622524fa1de046e295f66d7c70f72499be354fff3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'c94eac08c691b4d226eaa15ffc907d9fbd3d6e6493767d70b6f104884a885489', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19425, hash: 'f468e880c82eb770a407066311499ba7d15c89d2bd602853c63a331db126622c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
