import * as React from 'react';

const intialState: State = {
  cursors: [],
  x: 0,
  y: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_CURSOR':
      return { ...state, cursors: [...state.cursors, action.payload] };
    case 'UPDATE_POS':
      return { ...state, x: action.payload.x, y: action.payload.y };
    default:
      return state;
  }
};

const Store = React.createContext<[State, React.Dispatch<Action>]>([
  intialState,
  (a) => a,
]);

export const useStore = () => React.useContext(Store);

type StoreProviderProps = {
  children: React.ReactElement;
};

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const store = React.useReducer(reducer, intialState);
  return <Store.Provider value={store}>{children}</Store.Provider>;
};

export default StoreProvider;
