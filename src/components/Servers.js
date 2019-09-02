import React, {Component} from "react";
import "./Servers.css";
import axios from "axios";
import Add from "./Add";

export default class Servers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servers: [],
        }
    }

    componentDidMount() {
        axios
          .get("/api/servers")
          .then(response => {
            this.setState({ servers: response.data });
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
                <section className="servers-folder">
                        <div className="servers-file">
                            <img src={val.image} className="image-servers-file"></img>
                            <div className="title-server-file">
                            <h1>{val.name}</h1>
                            </div>
                            <div className="information-servers-file">
                                <a href={val.information} target="_blank"><button className="information-button">Information</button></a>
                                <a href={val.kits} target="_blank"><button className="kits-button-2">Kits</button></a>
                            </div>
                        </div>
                        <div className="delete-button-file">
                            <button onClick={e => {
                                e.stopPropagation();
                                axios.delete(`/api/servers/${index}`).then(response => {
                                    console.log(response)
                                    this.props.updateDelete(response.data);
                                });
                            }}
                            className="delete-button">Delete</button>
                        </div>
                    </section>
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
