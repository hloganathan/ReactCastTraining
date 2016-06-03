export default function counter(state = 0, action) {


  switch (action.type) {
    case 'INCREMENT':
          console.log(action);
     console.log(state);
      return state + 1
    case 'DECREMENT':
         console.log(action);
     console.log(state);
      return state - 1
    default:
      return state
  }
}
