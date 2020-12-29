import { useReducer, useEffect } from 'react';

function showsReducer(prevState, action){

  switch (action.type){
    case 'ADD': {
        return [...prevState,action.showid];
    }

    case 'REMOVE': {
        return prevState.filter(showid => showid !==action.showid);
    }

    default:return prevState;
}
}
function usePersistedReducer(reducer, initialState, key) {

 const [state,dispatch] = useReducer(reducer, initialState, (initial) => {

 const persisted = localStorage.getItem(key);

 return persisted ? JSON.parse(persisted) : initial;

 });
  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
   
 return [state,dispatch];
}
export function useShows(key='show') {
    return usePersistedReducer(showsReducer, [], key);
}