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

  const items = [people, setPeople];
  return (
    <PlayerData.Provider value={items}>{props.children}</PlayerData.Provider>
  );
};

export const usePlayerData = () => useContext(PlayerData);

export default Store;
