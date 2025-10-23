
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/main",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/main"
  },
  {
    "renderMode": 2,
    "route": "/details"
  },
  {
    "renderMode": 2,
    "route": "/forecast"
  },
  {
    "renderMode": 2,
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 769, hash: '3c691b8faf7855ec121a6a92aae38870f72a78e430b96d16b80e725c0a3f4d01', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1063, hash: '8c64e9e61750eabb191994ff75e1be7dff52b234d4efa0ed5112343f1dedc4fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'forecast/index.html': {size: 10614, hash: 'e8ec658269ad58aa137e860717eb368f046667ea99b29f8a9b9954f7f475fd82', text: () => import('./assets-chunks/forecast_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5929, hash: 'b337c89e5235a40c59d66e82207000f98d7f76758b2893d3558924dbdce9dadb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 7183, hash: '60542526d5ccf7999fcfccb934fbcf57c35e69f424fa5ddc9cb9e81d43e33e85', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'main/index.html': {size: 7401, hash: '17b5d3b201f7afb7759109f3a843da814c1835b42c3804bfd6e82b0abdc04cb1', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'styles-IJOF55YN.css': {size: 431, hash: 'lSf6hADLJEQ', text: () => import('./assets-chunks/styles-IJOF55YN_css.mjs').then(m => m.default)}
  },
};
