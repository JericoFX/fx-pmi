import { Component } from 'solid-js';
import Container from './lib/Container';
import Navbar from './lib/Navbar';
import AppSpace from './lib/AppSpace';
import Store from '@/lib/Store';
import { Router, useRoutes } from '@solidjs/router';
import routes from './lib/routes';

const App: Component<{}> = () => {
  const Routes = useRoutes(routes);
  return (
    <div class='relative w-screen h-screen select-none'>
      <Router>
        <Store>
          <Container>
            <Navbar></Navbar>
            <AppSpace>
              <Routes />
            </AppSpace>
          </Container>
        </Store>
      </Router>
    </div>
  );
};
export default App;
