import { JSX, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

export const PlayerData = createContext([]);

const Store = (props: {
  children:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | (string & {})
    | null
    | undefined;
}) => {
  const [people, setPeople] = createStore([
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
  ]);

  const items = [people, setPeople];
  return (
    <PlayerData.Provider value={items}>{props.children}</PlayerData.Provider>
  );
};

export const usePlayerData = () => useContext(PlayerData);

export default Store;
