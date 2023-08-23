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
    playerData: writable<Writable<Jugador>>([]),
  };
  const { update, set, subscribe } = writable(data);
  const methods = {
    changeDuty: (cid: string, datas: boolean) => {
      data.playerData.update((e: any) => {
        const id = e.findIdex((e: { cid: string }) => e.cid === cid);
        // e =
        e[id] = { ...e, duty: datas };
        e = e;
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
    updateAsignament: (data: any) => {
      data.playerData.update((e) => {
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
