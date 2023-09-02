import { Component, Show, createEffect, createSignal } from 'solid-js';
import Container from './lib/Container';
import Navbar from './lib/Navbar';
import AppSpace from './lib/AppSpace';
import { Router, useRoutes } from '@solidjs/router';
import routes from './lib/routes';
import Nui from '@/hooks/useNuiEvent';
import { usePlayerData } from './lib/Store';

const App: Component<{}> = () => {
  const Routes = useRoutes(routes);
  const [open, setOpen] = createSignal(false);
  const [people, { addPolicePlayers }] = usePlayerData();
  Nui.onEvent('openNUI', ({ open, tabla, mydata }): void => {
    setOpen(open);
  });
  Nui.onEvent('updatePolice', ({ type, data }): void => {
    addPolicePlayers(data);
  });
  return (
    <div class='relative w-screen h-screen select-none'>
      <Show when={open()}>
        <Router>
          <Container>
            <Navbar></Navbar>
            <AppSpace>
              <Routes />
            </AppSpace>
          </Container>
        </Router>
      </Show>
    </div>
  );
};
export default App;
