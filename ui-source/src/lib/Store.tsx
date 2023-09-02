// @ts-nocheck
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
  const [people, setPeople] = createStore([]);

  const items = [
    people,
    {
      addPolicePlayers: (players) => {
        const _e = people.findIndex((es) => es.citizenid === players.citizenid);
        if (_e !== -1) return;
        setPeople((e) => [...e, players]);
      },
      changeDuty: (cid: string) => {
        setPeople(
          (e) => e.citizenid === cid,
          'duty',
          (es) => !es
        );
      },
    },
  ];
  return (
    <PlayerData.Provider value={items}>{props.children}</PlayerData.Provider>
  );
};

export const usePlayerData = () => useContext(PlayerData);

export default Store;
