import React from "react";
import "./Delete.css";
import Axios from "axios";


export default function Delete(props) {
    return(
        <div>
            {/* <button onClick={e => {
              e.stopPropagation();
              Axios.delete(`/api/delete/${this.props.index}`).then(response => {
                this.props.updateServers(response.data);
              });
            }} 
            >Delete</button> */}
        </div>


    )
}