import { writable, type Writable } from 'svelte/store';

import type { PlayersData, MyData } from './types';
import { isEnvBrowser } from './misc';
export const myData = writable<MyData>({
  duty: false,
  firstname: '',
  lastname: '',
  citizenid: '',
  callsign: '',
});
const store = () => {
  const data = {
    playerData: writable(
      isEnvBrowser()
        ? [
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
          ]
        : []
    ),
    open: writable<boolean>(false),
    currentPage: writable('officer'),
    darkMode: writable(true),
    reports: writable(
      isEnvBrowser()
        ? [
            {
              id: 1,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: 'lorem',
            },
            {
              id: 2,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 3,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 4,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 5,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 6,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 7,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 8,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 9,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
            {
              id: 10,
              code: '10-50',
              street: 'BOULEVARD DE LOS SUEÑOS ROTOS',
              taked: false,
              callsign: '',
              message: '',
            },
          ]
        : []
    ),
  };
  const { update, subscribe, set } = writable(data);
  const methods = {
    setData: (
      datas: (
        | {
            firstname: string;
            lastname: string;
            phone: string;
            citizenid: string;
            rank: string;
            callsign: string;
            radio: number;
            vehicle: boolean | { plate: string; vehicle: string };
            duty: boolean;
            assignment: boolean;
          }
        | {
            firstname: string;
            lastname: string;
            phone: string;
            citizenid: string;
            rank: string;
            callsign: string;
            vehicle: boolean;
            duty: boolean;
            radio: number;
            assignment: { message: string; street: string };
          }
      )[]
    ) => {
      data.playerData.set(datas);
    },
    updatePlayerData: (
      type: string,
      dat:
        | {
            firstname: string;
            lastname: string;
            phone: string;
            citizenid: string;
            rank: string;
            callsign: string;
            radio: number;
            vehicle: { plate: string; vehicle: string };
            duty: boolean;
            assignment: boolean;
          }
        | {
            firstname: string;
            lastname: string;
            phone: string;
            citizenid: string;
            rank: string;
            callsign: string;
            vehicle: boolean;
            duty: boolean;
            radio: number;
            assignment: { message: string; street: string };
          }
    ) => {
      data.playerData.update((e) => {
        const _d = e.findIndex((d) => d.citizenid === dat.citizenid);
        if (type === 'add') {
          if (e.some((s) => s.citizenid === dat.citizenid)) return;
          e = [...e, dat];
        } else {
          e.splice(_d, 1);
        }
        return e;
      });
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
    changeVehicle: (cid: string) => {
      data.playerData.update((e) => {
        const _d = e.filter((s) => s.citizenid === cid)[0];
        _d.vehicle = false;
        e = e;
        return e;
      });
    },
    changeNUI: (op: boolean) => {
      data.open.set(op);
    },
    changeDarkMode: (da: boolean) => {
      data.darkMode.update((e) => {
        e = da;
        e = e;
        return e;
      });
    },
    addNewReport: (rep: {
      id: number;
      code: string;
      street: string;
      taked: boolean;
      callsign: string;
      message: string;
    }) => {
      data.reports.update((e) => {
        e = [...e, rep];
        return e;
      });
    },
    deleteReport: (id: string | number) => {
      data.reports.update((e) => {
        let datas = e.findIndex((d) => d.id === id);
        if (e.some((d) => d.id === id)) {
          e.splice(datas, 1);
        }
        e = e;
        return e;
      });
    },
    markReport: (callsign: string, taken: boolean, id: string | number) => {
      data.reports.update((e) => {
        const _d = e.findIndex((d) => d.id === id);
        console.log(_d);
        e[_d] = { ...e[_d], taked: taken, callsign: callsign };
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
