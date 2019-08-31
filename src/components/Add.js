import React, {Component} from "react";
import "./Add.css";
import Axios from "axios";


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
        Axios
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
                    <input onChange = {(e) => this.setState({information: e.target.value})} name = "information" className="information-button-create" placeholder="Information Link Here"></input>
                    <input onChange = {(e) => this.setState({kits: e.target.value})} name = "kits" className="kits-button-create" placeholder="Kits Link Here"></input>
                    <input onChange = {(e) => this.setState({image: e.target.value})} name = "image" placeholder="Image Url Here" ></input>
                </form>
            </div>
            <div className="submit">
                <div className="submit-button">
                    <button className="submit-button-edit" onClick = { this.addServers } >Submit</button>
                </div>
            </div>
        </section>
        
    )
}



}