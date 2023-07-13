import App from './App.svelte';
import { getShadowWrapper } from './wrapper';

const app = new App({
  target: getShadowWrapper(),
});

export default app;
