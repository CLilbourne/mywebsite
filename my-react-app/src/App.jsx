import Button from "./button.jsx";
import Card from "./Card.jsx"
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "../list.jsx";
function App() {
  return(
    <>
    <Card></Card>
    <Button></Button>
    <Student name="Fred" age= {30} isStudent={true}></Student>
    <Student name="Jim" age= {12} isStudent={false}></Student>
    <Student></Student>
    <UserGreeting isLoggedIn={true} username ="Connor"/>
    <List></List>
    </>
  );
}

export default App
