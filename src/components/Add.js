import React, {Component} from "react";
import "./Add.css";
import axios from "axios";


export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            Add: [],
            server: ""

        }
        this.handleInput = this.handleInput.bind(this)
        this.addServers = this.addServers.bind(this)
    }
    handleInput(e) {
        this.setState({[e.target.name] : e.target.value }) 
    }

    addServers(){
        axios
            .post("/api/server/add",{server: this.state.server})
            .then(response => {
                this.setState({ updateAdd: response.data });
              })
    }
        
render(){
    console.log (this.state)
    return(
        <section>
            <div className="form-1">
                <form className="add-form-1">
                    <input className="server-title-create" name = "server" onChange = {this.handleInput} placeholder="Server Title" type="text" ></input>
                    <input name = "information" className="information-button-create"></input>
                    <input name = "kits" className="kits-button-create"></input>
                </form>
            </div>
                <button onClick = { this.addServers } >Submit</button>
        </section>
        
    )
}



}