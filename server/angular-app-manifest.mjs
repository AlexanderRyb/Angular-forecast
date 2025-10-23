
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-forecast/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Angular-forecast/main",
    "route": "/Angular-forecast"
  },
  {
    "renderMode": 2,
    "route": "/Angular-forecast/main"
  },
  {
    "renderMode": 2,
    "route": "/Angular-forecast/details"
  },
  {
    "renderMode": 2,
    "route": "/Angular-forecast/forecast"
  },
  {
    "renderMode": 2,
    "route": "/Angular-forecast/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 786, hash: '0a9e51143ae42d629e3921f3018f5641f905cec93fe4c2b41ef154cbb7b05713', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: '9f1794ebc4d58680827fc9aa14e6ca1ef95b945933c8312a87d00dc5a130a0b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main/index.html': {size: 7486, hash: 'fc7466d8dfffd8e01280b9767896572666459e6357c0668eeb40e1ab960dd9e9', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6014, hash: '69e243c8b992a90498f3d8de4e3a52939776351d9c7a4f326d3d12274becf236', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 7268, hash: 'be2a980e466b202242ce96ce5dfb9795a427dfc6365b5f9a82fa58e9cb433ad6', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'forecast/index.html': {size: 10699, hash: '7a98df599b999808fb91e73d6d98f8495855ce3b2a32bff6c27fd38665e89bcd', text: () => import('./assets-chunks/forecast_index_html.mjs').then(m => m.default)},
    'styles-IJOF55YN.css': {size: 431, hash: 'lSf6hADLJEQ', text: () => import('./assets-chunks/styles-IJOF55YN_css.mjs').then(m => m.default)}
  },
};
