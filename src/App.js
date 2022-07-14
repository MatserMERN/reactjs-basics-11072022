import Scott from "./1.components/1.function/Greet";
import GreetFatArrow from "./1.components/1.function/GreetFatArrow";
import { GreetFatArrowNamed } from "./1.components/1.function/GreetFatArrowNamed";
import { GreetNamed as Desatnick } from "./1.components/1.function/GreetNamed";
import { GreetOne } from "./1.components/1.function/GreetOne";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeNamed } from "./1.components/2.class/WelcomeNamed";
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

const Test = () => <h1>Test Component</h1>

function App() {
  function getMessage(){
    return "Welcome to props in ReactJS"
  }
  return (
    <div className="container">
      <EventBind />
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
      <br />
      <GreetingOne id={1} 
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
