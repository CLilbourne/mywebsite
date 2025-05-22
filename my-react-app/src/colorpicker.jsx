
import React, {useState}from 'react'
function colorpicker (){
    const[color, setColor] = useState('#ffffff');

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(<div className='color-picker-container'>
            <h1>
                Colour Picker
            </h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>
                    Selected Colour: {color}
                </p>
            </div>
            <label>Select a Colour </label>
            <input type= 'color' value = {color} onChange={handleColorChange}/>
        </div>)

}
export default colorpicker