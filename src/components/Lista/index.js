import React from 'react'
import {connect} from 'react-redux';


class Lista extends React.Component{
render(){return(<ul>{this.props.Tasks.map((task, key) => {
  return (
     <li key={key}>{task}</li>
  );
})}</ul>)
}
}

function mapStateToProps(state){
  console.log(state)
  return{
    Tasks: state.Tasks
  }
}
export default connect(mapStateToProps)(Lista);