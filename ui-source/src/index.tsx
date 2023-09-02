/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import Store from './lib/Store';
const root = document.getElementById('root');

render(
  () => (
    <Store>
      <App></App>
    </Store>
  ),

  root!
);
