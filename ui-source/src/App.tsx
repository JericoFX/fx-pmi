import { Component } from 'solid-js';
import Container from './lib/Container';
import Navbar from './lib/Navbar';
import AppSpace from './lib/AppSpace';

import { Router, useRoutes } from '@solidjs/router';
import routes from './lib/routes';
import { debugData } from './utils/debugData';

const App: Component<{}> = () => {
  const Routes = useRoutes(routes);
  debugData([
    {
      action: 'openNUI',
      data: [
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: true,
          assignment: false,
        },
        {
          firstname: 'Jeriaco',
          lastname: 'FsX',
          phone: '09922222',
          citizenid: 'ADSasddsa',
          rank: 'Liutensent',
          callsign: 'C5s10',
          radio: 1,
          vehicle: {
            plate: 'ASD123456',
            vehicle: 'Primo',
          },
          duty: false,
          assignment: false,
        },
        {
          firstname: 'Jerissco',
          lastname: 'FX',
          phone: 'sssss',
          citizenid: 'ADS11232332',
          rank: 'Liutenaent',
          callsign: 'C510',
          vehicle: false,
          duty: false,
          radio: 1,
          assignment: {
            message: 'JERICO',
          },
        },
      ],
    },
  ]);
  return (
    <div class='relative w-screen h-screen select-none'>
      <Router>
        <Container>
          <Navbar></Navbar>
          <AppSpace>
            <Routes />
          </AppSpace>
        </Container>
      </Router>
    </div>
  );
};
export default App;
