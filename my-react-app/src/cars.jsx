import React, {useState} from 'react'

function cars() {
    const[cars, setCars] = useState([]);
    const[carYear, setCarYear]= useState(new Date().getFullYear());
    const[carMake, setCarMake]= useState('');
    const[carModel, setCarModel]= useState('');
    
    function handleAddCar(){
        const newCar = {year: carYear, make:carMake, model: carModel};
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("")
        setCarModel("")
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_,i)=> i !== index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }
    
    return(<div className='card'>
            <h2>
                List Of Cars
            </h2>
            <ul>
                {cars.map((car,index)=>
                     <li key={index}
                      onClick = {() =>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
                <input type = "number" value = {carYear} onChange={handleYearChange}/>
                <input type = "text" value = {carMake} onChange={handleMakeChange} placeholder='Enter car Make:'/>
                <input type = "text" value = {carModel} onChange={handleModelChange} placeholder='Enter car Model:'/>
                <button className= 'button' onClick={handleAddCar}>Add Car</button>
            

    </div>)
}
export default cars