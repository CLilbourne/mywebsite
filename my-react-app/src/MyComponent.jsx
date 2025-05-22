import { number } from "prop-types";
import React, {useState} from "react";
function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed]= useState(false);
    const [quantity, setQuantity] = useState(1);
    const [comment,setComment]= useState();
    const [payment, setPayment]= useState();
    const [Shipping,setShipping] = useState();

    const updateName = () =>{
        setName("Connor")
    }
    const updateAge = () =>{
        setAge(age+1)
    }
    
    const updateEmployment = () =>{
        setIsEmployed(!isEmployed)
    }
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
     function handleCommentChange(event){
        setComment(event.target.value)
    }
       function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    return(<div>
        <p>
            Name: {name}
        </p>
        <input value={name} onChange={handleNameChange} />
        <p>
            Quantity: {quantity}
        </p>
        <p>
            Quantity: {quantity}
        </p>
          <input value={quantity} onChange={handleQuantityChange} type = 'number' />
        <p>comment: {comment}</p>
        <textarea value = {comment} onChange={handleCommentChange} placeholder="comment here"/>
        <p>
            Payment: {payment}
        </p>
        <select value = {payment} onChange={handlePaymentChange}>
            <option value= "">Select an Option</option>
            <option value= "Visa">Visa</option>
            <option value= "Master Card">Master card</option>
        </select>
        <p>
            shipping : {Shipping}
        </p>
        <label>
            <input type = "radio" value = "pickup" 
            checked ={Shipping=== "pickup"}
             onChange={handleShippingChange}/>
            Pickup
        </label>
        <label>
            <input type = "radio" value = "delivery"
            checked ={Shipping=== "delivery"}
             onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>
            Age: {age}
        </p>
        <button onClick={updateAge}>Set Age</button>
        <p>
            Is Employed: {isEmployed ? "Yes":"No"}
        </p>
        <button onClick={updateEmployment}>Set Employment</button>
        </div>)
}

export default MyComponent