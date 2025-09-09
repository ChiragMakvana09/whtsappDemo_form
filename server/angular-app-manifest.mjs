
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
    'index.csr.html': {size: 521, hash: '19eb3f3ec20c438ede84bb7aa69c3b73839321f2d62a23c1071511549cc44bf5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '3ccd79abc6ec5e9c24e566d280656116d4561dd2ef888d74220b03750ef09684', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19425, hash: '17a5efb9af599afd0ffebbccd91a9e89f0e2df05d56f4e6954f9ab86f4193861', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
