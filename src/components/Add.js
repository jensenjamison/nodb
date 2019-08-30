import React, {Component} from "react";
import "./Add.css";
import axios from "axios";
import { runInThisContext } from "vm";


export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            Add: [],
            server: "",
            title: "",
            information: "",
            kits: "",
            image: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.addServers = this.addServers.bind(this)
    }
    handleInput(e) {
        this.setState({[e.target.name] : e.target.value }) 
    }

    addServers(){
        let obj = {
            name: this.state.title,
            information: this.state.information,
            kits: this.state.kits,
            image: this.state.image
        }
        axios
            .post("/api/server/add",obj)
            .then(response => {
                console.log(response.data)
                this.props.updateServers(response.data)
                // this.setState({ updateAdd: response.data });
              })
              .catch(err => {
                  console.log(err)
            });
    }
        
render(){
    console.log (this.state)
    return(
        <section>
            <div className="form-1">
                <form className="add-form-1">
                    <input onChange = {(e) => this.setState({title: e.target.value}) } className="server-title-create" name = "server"  placeholder="Server Title" ></input>
                    <input onChange = {(e) => this.setState({information: e.target.value})} name = "information" className="information-button-create" placeholder="Information input"></input>
                    <input onChange = {(e) => this.setState({kits: e.target.value})} name = "kits" className="kits-button-create" placeholder="Kits link here"></input>
                    <input onChange = {(e) => this.setState({image: e.target.value})} name = "image" placeholder="Image Url" ></input>
                </form>
            </div>
                <button onClick = { this.addServers } >Submit</button>
        </section>
        
    )
}



}