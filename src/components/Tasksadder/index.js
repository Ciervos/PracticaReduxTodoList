import React from 'react';
import {connect} from 'react-redux';
import {addTask, changeInput} from '../../store';

class Taskadder extends React.Component{

  
  handleChange(e) {
    const { value } = e.target;
 
    const {dispatch} = this.props;
    dispatch(changeInput(value));
  }

  handleVaciar(){
    document.querySelector("#inputprincipal").value = ""
  }

  handleClick(){
    const {dispatch} = this.props;
    dispatch(addTask());
    this.handleVaciar();
  };

  render(){ 
    return(<>
  <input id="inputprincipal" onChange={(e) => this.handleChange(e)} type="text" />
  <button onClick={()=>this.handleClick()}>Agregar</button>
  </>)
 }
}


export default connect()(Taskadder);
