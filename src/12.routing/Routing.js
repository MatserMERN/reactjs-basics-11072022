import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link  , useNavigate, useLocation} from "react-router-dom"
import PersonAPI from '../11.ajax-calls/PersonAPI'
import UserMongoAPI from '../11.ajax-calls/UserMongoAPI'
import Greeting from '../3.props/Greeting'
import UserForm from '../9.form-handling/UserForm'
import Login from "../11.ajax-calls/Login"
import Register from '../11.ajax-calls/Register'

const Home = (props) => <div  className="container"><h1>Welcome Home {props}</h1></div>
const Main = () => <div  className="container"><h1>Welcome to ReactJS Routing</h1></div>
const Error = () => <div  className="container"><h1>Please contact Administrator</h1></div>
const Success = () =>  {
    const location = useLocation();
    console.log(location.state)
    return(
        <div className="container">
            <h1>{location.state.message}</h1>
        </div>
    )
}

function Routing() {
  function getMessage(){
    return "Welcome to props in ReactJS"
  }
   
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a href="/main" className="navbar-brand">ReactJS</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="/greeting" className="nav-item nav-link active">Greeting</a>
                            <a href="/form" className="nav-item nav-link">Form</a>
                            <a href="/person" className="nav-item nav-link">Person</a>
                            <a href="/register" className="nav-item nav-link" >Register</a>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <a href="/login" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/main" element={<Main />} ></Route>
                <Route path="/home" element={<Home />} ></Route>
                <Route  path="/greeting"
                        element={<Greeting id={1}
                        name="Scott"
                        skill="Great Boss"
                        isAdmin={true}
                        department={null}
                        batch={undefined}
                        address={{ city: "Boston" }}
                        getMessage={getMessage}
                        sayHello={function () { return "Hello React" }}
                        getDisplay={() => "Here is the message to display"}
                        subjects={["Agile", "JavaScript", "ReactJS"]}
                    />} ></Route>
                <Route path="/form" element={<UserForm />} ></Route>
                <Route path="/person" element={<PersonAPI />} ></Route>
                <Route path="/register" element={<Register navigate={useNavigate()} />} ></Route>
                <Route path="/user" element={<UserMongoAPI />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/success" element={<Success />} ></Route>
                <Route path="*" element={<Error />} ></Route>
            </Routes>
        </>


    )
}

export default Routing