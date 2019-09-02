import React, {Component} from "react";
import "./Servers.css";
import axios from "axios";
import Card from "./Card";

export default class Servers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servers: []
        }
    }

    componentDidMount() {
        axios
          .get("/api/servers")
          .then(response => {
            this.setState({ servers: response.data});
          })
          .catch(err => {
              console.log(err)
          });
        }
        render(){
            console.log(this.state.servers)
        let add = this.props.servers.map((val, index) => {
            console.log(index)
            
            return(
                <Card val={val} index={index} updateDelete={this.props.updateDelete} updateEdit={this.props.updateEdit} editData={this.props.editData} updateServers={this.props.updateServers}/>
                )
            })
            return(

                <header className="background-2">
                    <section>
                        {add}
                    </section>
                    <section className="add-server">
                        <div className="add-server-file">
                        <button onClick = {this.props.updateAdd} className="add-server-button">Add Server</button>
                        </div>
                    </section>
                </header>
            )
        }




}
