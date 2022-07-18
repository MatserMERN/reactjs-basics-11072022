import ClassCounter from "./13.hooks/ClassCounter";
import Scott from "./1.components/1.function/Greet";
import GreetFatArrow from "./1.components/1.function/GreetFatArrow";
import { GreetFatArrowNamed } from "./1.components/1.function/GreetFatArrowNamed";
import { GreetNamed as Desatnick } from "./1.components/1.function/GreetNamed";
import { GreetOne } from "./1.components/1.function/GreetOne";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeNamed } from "./1.components/2.class/WelcomeNamed";
import LifiCycleA from "./10.life-cycle-methods/LifiCycleA";
import CommentsAPI from "./11.ajax-calls/CommentsAPI";
import PersonAPI from "./11.ajax-calls/PersonAPI";
import PhotosAPI from "./11.ajax-calls/PhotosAPI";
import PostsAPI from "./11.ajax-calls/PostsAPI";
import StudentSQLAPI from "./11.ajax-calls/StudentSQLAPI";
import UserMongoAPI from "./11.ajax-calls/UserMongoAPI";
import UsersAPI from "./11.ajax-calls/UsersAPI";
import Routing from "./12.routing/Routing";
import Hello from "./2.jsx/Hello";
import HelloOne from "./2.jsx/HelloOne";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import User from "./4.state/User";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.condtional-rendering/UserGreeting";
import UserGreetingOne from "./6.condtional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.condtional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.condtional-rendering/UserGreetingTwo";
import NameListFive from "./7.list-rendering/NameListFive";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListSix from "./7.list-rendering/NameListSix";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import AppStyles from "./8.styling/AppStyles";
import Inline from "./8.styling/Inline";
import Stylesheet from "./8.styling/Stylesheet";
import UserForm from "./9.form-handling/UserForm";
import UserFormOne from "./9.form-handling/UserFormOne";
import FunctionCounter from "./13.hooks/FunctionCounter";
import HookUsingString from "./13.hooks/HookUsingString";
import HookUsingObject from "./13.hooks/HookUsingObject";
import UserAPIUsingHook from "./13.hooks/UserAPIUsingHook";
import PropDrillingOne from "./13.hooks/PropDrillingOne";
import PropDrillingTwo from "./13.hooks/PropDrillingTwo";
import UseRefHook from "./13.hooks/UseRefHook";

const Test = () => <h1>Test Component</h1>

function App() {
  // function getMessage(){
  //   return "Welcome to props in ReactJS"
  // }
  return (
    <div>
      <UseRefHook />
      {/* <PropDrillingTwo /> */}
      {/* <PropDrillingOne /> */}
      {/* <UserAPIUsingHook /> */}
      {/* <HookUsingObject /> */}
      {/* <HookUsingString /> */}
      {/* <FunctionCounter /> */}
      {/* <ClassCounter /> */}
      {/* <Routing /> */}
      {/* <UserMongoAPI /> */}
      {/* <StudentSQLAPI /> */}
      {/* <PersonAPI /> */}
      {/* <UsersAPI /> */}
      {/* <PhotosAPI /> */}
      {/* <CommentsAPI /> */}
      {/* <PostsAPI /> */}
      {/* <LifiCycleA /> */}
      {/* <UserFormOne /> */}
      {/* <UserForm /> */}
      {/* <AppStyles /> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameListSix /> */}
      {/* <NameListFive /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <User /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
       {/* <Greeting id={1} 
                name="Scott" 
                skill="Great Boss" 
                isAdmin={true}
                department={null}
                batch={undefined}
                address={{city:"Boston"}}
                getMessage={getMessage}
                sayHello = {function(){ return "Hello React"}}
                getDisplay={() =>"Here is the message to display"}
                subjects={["Agile", "JavaScript", "ReactJS"]}
      >
        <p style={{display: "inline"}}>This is child component</p>
      </Greeting> 
      <br /> */}
     {/* <GreetingOne id={1} 
                name="Scott" 
                skill="Great Boss" 
                isAdmin={true}
                department={null}
                batch={undefined}
                address={{city:"Boston"}}
                getMessage={getMessage}
                sayHello = {function(){ return "Hello React"}}
                getDisplay={() =>"Here is the message to display"}
                subjects={["Agile", "JavaScript", "ReactJS"]}
      /> */}
      {/* <Greeting name="Adam" skill="Business Analyst"/>
      <Greeting name="Tuan" skill="Tech Boss"/> */}
      {/* <Hello />
      <HelloOne /> */}
      {/* <Scott />
      <Desatnick />
      <GreetFatArrow />
      <GreetFatArrowNamed />
      <GreetOne />
      <Test />
      <Welcome />
      <WelcomeNamed /> */}
    </div>
  );
}

export default App;
