import { writable, type Writable } from 'svelte/store';

import type { PlayersData, MyData } from './types';
const store = () => {
  const data = {
    playerData: writable([
      {
        firstname: 'Jerico',
        lastname: 'FX',
        phone: '099999999',
        citizenid: 'ADS123321',
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
        citizenid: 'ADS123322',
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
        citizenid: 'ADS123323',
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
        citizenid: 'ADS123324',
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
        citizenid: 'ADS123325',
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
        citizenid: 'ADS123326',
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
        citizenid: 'ADS123327',
        rank: 'Liutenent',
        callsign: 'C510',
        radio: 1,
        vehicle: {
          plate: 'ASD1234568',
          vehicle: 'Primo',
        },
        duty: true,
        assignment: false,
      },
      {
        firstname: 'Jerico',
        lastname: 'FX',
        phone: '099999999',
        citizenid: 'ADS123329',
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
        citizenid: 'ADS123320',
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
        citizenid: 'ADS1233211',
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
        citizenid: 'ADSasddsa12',
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
        citizenid: 'ADS11232332123',
        rank: 'Liutenaent',
        callsign: 'C510',
        vehicle: false,
        duty: false,
        radio: 1,
        assignment: {
          message: 'JERICO',
          street: 'BOULEVAR WACHO',
        },
      },
    ]),
    myData: writable<Writable<MyData>>({}),
    open: writable<boolean>(false),
    currentPage: writable('officer'),
    darkMode: writable(true),
  };
  const { update, subscribe, set } = writable(data);
  const methods = {
    setData: (datas: PlayersData[]) => {
      data.playerData.set(datas);
    },
    updateDuty: (cid: string, duty: boolean) => {
      data.playerData.update((e) => {
        const _d = e.filter(
          (s: { citizenid: string }) => s.citizenid === cid
        )[0];
        _d.duty = duty;
        // eslint-disable--line no-self-assign
        e = e;
        return e;
      });
    },
    changeVehicle: (cid) => {
      data.playerData.update((e) => {
        const _d = e.filter((s) => s.citizenid === cid)[0];
        _d.vehicle = null;
        e = e;
        return e;
      });
    },
    changeNUI: (op: boolean) => {
      data.open.set(op);
    },
    changeDarkMode: (da) => {
      data.darkMode.update((e) => {
        e = da;
        e = e;
        return e;
      });
    },
  };
  return {
    update,
    set,
    subscribe,
    ...data,
    ...methods,
  };
};

export default store;
