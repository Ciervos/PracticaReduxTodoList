import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addTask} from './store';
import Taskadder from './components/Tasksadder';
import Lista from './components/Lista';

class App extends React.Component{

 render(){ return (
    <>
    <Taskadder/>
    <Lista/>
    </>
  );
 }
}


export default connect()(App);


