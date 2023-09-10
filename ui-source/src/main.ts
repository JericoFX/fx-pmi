import App from './App.svelte';
import 'virtual:uno.css';
import '@unocss/reset/normalize.css';
const app = new App({
  target: document.getElementById('app'),
  intro: true,
});

export default app;
