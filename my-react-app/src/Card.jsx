
import profilePic from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className= "cardImage" src={profilePic} alt = "profile picture">
            </img>
            <h2 className='cardTitle'>
                Connor Lilbourne
            </h2>
            <p className='cardText'>BSC Computers Science Grad pursuing roles in AI, Machine Learning and Data Analytics</p>
        </div>
    );
}
export default Card
