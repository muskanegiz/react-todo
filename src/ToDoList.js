import React from "react";
import "./App.css";
class ToDO extends React.Component{
    constructor(){
        super()
        this.state={
                InputText:" ",
                list:[]
        }
    }
    inputChange = (e) => {
        this.setState({
            InputText: e.target.value,
        });
  };
  
    handleInput(event){
        this.setState({InputText:event.target.value});
    }
    buttonSubmit = (e) => {
        this.setState({
          list: [this.state.InputText, ...this.state.list],
          InputText: "",
        });
    }
    render(){
        return(
            <>
            <div id="detail">
                <h1> ToDo List </h1>
                <h3> Add Item</h3>
                <input
          type="text"
          value={this.state.InputText}
          placeholder="Enter task..."
          onChange={this.inputChange}
        />
                {/* <input type="text" value={this.state.InputText} onchange={this.handleInput}></input> */}
                <button onClick={this.buttonSubmit}> + </button>
                <h3>Todo</h3>
                <ul type="none">
                    {this.state.list.map((list) => (
                    <li>{list}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }

}
export default ToDO;