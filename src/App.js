import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import PropsExample from './components/propsExample'
import StateExample from './components/StateExample'
import Count from './components/Count'
import FunctionClicked from './components/FunctionClicked'
import ClassClicked from './components/ClassClicked';
import EventBind from './components/EventBind'
import ParentComp from './components/ParentComp';
import UserGreeting from './components/UserGreeting'

// function App() {
//   return (
//     // React.createElement('div',{className: 'App'},
//     // React.createElement(Greet,null),React.createElement(Welcome,null))
//     names=['Bruce','Clark','Diana']
//     React.createElement('div',null,
//     React.createElement(PropsExample,
//       for (var i = 0; i < names.length; i++) {
//       name:names[i]
//     }))
//   )
// }

const App = () => {
  return (
    <div className='App'>
      <UserGreeting/>
      {/* <ParentComp/> */}
      {/* <EventBind/> */}
      {/* <FunctionClicked />
      <ClassClicked/> */}
      {/* <Count/> */}
      {/* <PropsExample name='Bruce' heroName='Batman'>
        <small>Batman is fictional character of DC </small>
      </PropsExample>
      <PropsExample name='Tony' heroName='Ironman'>
        <small>Ironman is fictional character of Marvel </small>
      </PropsExample> */}
      {/* <StateExample>
      </StateExample> */}

    </div>
  )
}

// class App extends Component{
//   render (){
//     return (
//       React.createElement('div',{className: 'App'},
//       React.createElement(Greet,null),React.createElement(Welcome,null))
//     )
//   }
// }

export default App;
