function Button(){
    let count = 0;
    const handleClick = (name) => {
        if(count < 3 ){
            count++;
            console.log(`${name} you clicked me ${count} less than 3`);
        }else{ console.log(`${name} you clicked me`);}
    };

    const handleClick2 = (name) => console.log(`${name} stop clicking me`); 
    //() => handleClick2('connor')

    const handleClick3 = (e) => e.target.textContent = "Ouch";
    const handleClick4 = (e) => e.target.textContent = "thanks";

    return(<button className="button" onDoubleClick={(e) => handleClick3(e)} onClick={(e) => handleClick4(e)}>Click me</button>)
}


export default Button