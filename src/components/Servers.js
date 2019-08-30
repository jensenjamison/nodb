import React, {Component} from "react";
import "./Servers.css";
import axios from "axios";
import Add from "./Add";

export default class Servers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servers: []
        }
    }

    // updateServers(servers) {
    //     this.setState({ servers: servers });
    //   }

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
        let add = this.props.servers.map(val => {
                return(
                    <section className="servers-folder">
                        <div className="servers-file">
                            <h1>{val.name}</h1>
                            <a href={val.information} target="_blank"><button className="information-button">Information</button></a>
                            <a href={val.kits} target="_blank"><button className="kits-button-2">Kits</button></a>
                            
                        </div>
                    </section>
                )
            })
            
            return(
                
                

                <header className="background-2">
                    <section className="servers-list">
                        <div className="server-1">
                            <div className="server-title">
                            <h1>---Blanks--- Server 1</h1>
                            </div>
                            <div className="information-kits">
                            <button className="information-button">Information</button>
                            <div className="kits">
                            <button className="kits-button-2">Kits</button>
                            </div>
                            </div>
                        </div>

                        <div className="server-2">
                            <div className="server-title">
                            <h1>---Blanks--- Server 2</h1>
                            </div>
                            <div className="information-kits">
                            <button className="information-button">Information</button>
                            <div className="kits">
                            <button className="kits-button-2">Kits</button>
                            </div>
                            </div>
                        </div>

                        <div className="server-3">
                            <div className="server-title">
                            <h1>---Blanks--- Server 3</h1>
                            </div>
                            <div className="information-kits">
                            <button className="information-button">Information</button>
                            <div className="kits">
                            <button className="kits-button-2">Kits</button>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        {/* {this.state.servers.map((server, index) => (
                            <Add
                            name={server.name}
                            image={server.image}
                            information={server.information}
                            kits={server.kits}
                            index={index}
                            />
                        ))} */}
                        {add}
                    </section>
                    <section className="add-server">
                        <button onClick = {this.props.updateAdd} className="add-server-button">Add Server</button>
                    </section>
                </header>
            )
        }




}
