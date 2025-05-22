import Button from "./button.jsx";
import Card from "./Card.jsx"
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "../list.jsx";
import Profilepicture from "./profilepicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./counter.jsx";
import Colorpicker from "./colorpicker.jsx";
import Cars from "./cars.jsx";
import Todo from "./todo.jsx";
function App() {

  return(
    <>
    <Card></Card>
    <Counter></Counter>s
    <Colorpicker></Colorpicker>
    <Cars></Cars>
    <Todo></Todo>
    <Button></Button>
    <Student name="Fred" age= {30} isStudent={true}></Student>
    <Student name="Jim" age= {12} isStudent={false}></Student>
    <Student></Student>
    <UserGreeting isLoggedIn={true} username ="Connor"/>
    <List></List>
    <Profilepicture></Profilepicture>
    <MyComponent></MyComponent>

    </>
  );
}

export default App
