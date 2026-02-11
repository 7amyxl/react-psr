import { useEffect, useState } from "react"

function Button({countToDisplay}){
  const [count,setCount] = useState(0);

  useEffect(() =>{
    countToDisplay(count);
  },[count])
    return(
        <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is
        </button>
        </>
    )
}

export default Button;