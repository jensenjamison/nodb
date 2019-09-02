import React, {Component} from "react";
import axios from "axios"

export default class Card extends Component{
render(){
    return(
        <section className="servers-folder">
        <div className="servers-file">
            <img src={this.props.val.image} className="image-servers-file"></img>
            <div className="title-server-file">
            <h1>{this.props.val.name}</h1>
            </div>
            <div className="information-servers-file">
                <a href={this.props.val.information} target="_blank"><button className="information-button">Information</button></a>
                <a href={this.props.val.kits} target="_blank"><button className="kits-button-2">Kits</button></a>
            </div>
        </div>
        <div className="delete-button-file">
            <button onClick={e => {
                e.stopPropagation();
                axios.delete(`/api/servers/${this.props.index}`).then(response => {
                    console.log(response)
                    this.props.updateDelete(response.data);
                });
            }}

            className="delete-button">Delete</button>
            <button onClick={()=>{
                axios.put(`/api/servers/${this.props.index}`, this.props.editData).then(response => {
                    console.log(response)
                    this.props.updateServers(response.data)
                })
            }}>

            Edit</button>
        </div>
    </section>
    )
}
}