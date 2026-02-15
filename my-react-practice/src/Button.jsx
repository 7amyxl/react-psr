import { useEffect, useReducer, useState } from "react"

function Button({countToDisplay}){
  // const [count,setCount] = useState(0);
  // const [name,setName] = useState('');

  const reduce = (state,action) =>{
    if(action.type == 'increment'){
      return {count: state.count + 1}
    }
    else{
      return {count: state.count - 1}
    }
  }

  const [state,dispatch] =  useReducer(reduce,{count: 2})
  

  useEffect(() =>{
    countToDisplay(state.count);
  },[state.count])
    return(
        <>
        <button onClick={() => dispatch({type: 'increment'})}>
          Increment
        </button>
        <button onClick={() => dispatch({type: 'decrement'})}>
          Decrement
        </button>
        </>
    )
}

export default Button;