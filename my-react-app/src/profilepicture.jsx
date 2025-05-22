function profilepicture(){

    const imageUrl = './src/assets/profile.jpg';
    const handleClick5 = (e) => e.target.style.display = 'none';

    return (<img onClick={(e)=>handleClick5(e)}src = {imageUrl}></img>)
}
export default profilepicture