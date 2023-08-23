import { writable, type Writable } from 'svelte/store';

interface Jugador {
  [citizenid: string]: {
    firstname: string;
    lastname: string;
    phone: string;
    citizenid: string;
    rank: string;
    callsign: string;
    vehicle: string | undefined;
    duty: boolean;
    assignment: string | undefined;
  };
}

const store = () => {
  const data = {
    playerData: writable([
      {
        firstname: 'Jerico',
        lastname: 'FX',
        phone: '099999999',
        citizenid: 'ADS12332',
        rank: 'Liutenent',
        callsign: 'C510',
        vehicle: '',
        duty: false,
        assignment: false,
      },
      {
        firstname: 'Jeriaco',
        lastname: 'FsX',
        phone: '09922222',
        citizenid: 'ADSasddsa',
        rank: 'Liutensent',
        callsign: 'C5s10',
        vehicle: '',
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
        vehicle: '',
        duty: false,
        assignment: false,
      },
    ]),
  };
  const { update, set, subscribe } = writable(data);
  const methods = {
    changeDuty: (cid: string, datas: boolean) => {
      data.playerData.update((e: any) => {
        const id = e.findIndex((e) => e.citizenid === cid);
        console.log(id);
        // e =
        e[id] = { ...e[id], duty: datas };
        console.log(JSON.stringify(e));
        e = [...e];
        return e;
      });
    },
    setData: (updateData: any) => {
      data.playerData.update((e) => {
        e = { ...e, ...updateData };
        e = e;
        return e;
      });
    },
    updateAsignament: (cid: string, datas: any) => {
      data.playerData.update((e) => {
        const id = e.findIndex((e: { cid: string }) => e.cid === cid);
        e[id] = { ...e, asignament: datas };
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

export default store();
