import React, {useState} from "react"

function counter (){

    const [count,setCount] = useState(0);
    const increment = ()=> {
        setCount(count+1)
    }
    const decrement = ()=> {
        setCount(count-1)
    }
    const reset = ()=> {
        setCount(0)
    }
    return(
        <div className="counter-container">
            <p className="count-display">
                {count}
            </p>
            <button contentEditable={false} onClick={increment}className="button">increment</button>
            <button  contentEditable={false} onClick={decrement} className="button">decrement</button>
            <button contentEditable={false} onClick={reset}className="button">reset</button>
        </div>
    )
    

}
export default counter