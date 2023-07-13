import { defineManifest } from '@crxjs/vite-plugin';
import { version } from '../package.json';

const host = 'www.linkedin.com/company/*/posts/*';

const icons: Record<string, string> = {
  '16': 'images/icon16.png',
  '32': 'images/icon32.png',
  '48': 'images/icon48.png',
  '128': 'images/icon128.png',
};

const activateOn = [`https://${host}`, `https://${host}`];

const manifest = defineManifest(async (env) => ({
  manifest_version: 3,
  name: `${env.mode === 'development' ? '[Dev] ' : ''} ADWISE News`,
  description: 'ADWISE News scrapper for linkedin',
  version,
  content_scripts: [
    {
      matches: activateOn,
      js: ['content/index.ts'],
    },
  ],
  host_permissions: activateOn,
  options_ui: {
    page: 'options/options.html',
    open_in_tab: true,
  },
  web_accessible_resources: [
    {
      resources: [
        // this file is web accessible; it supports HMR b/c it's declared in `rollupOptions.input`
        'welcome/welcome.html',
      ],
      matches: ['<all_urls>'],
    },
  ],
  action: {
    default_popup: 'popup/popup.html',
    default_icon: icons,
  },
  icons,
  permissions: ['storage', 'tabs'],
}));

export default manifest;
