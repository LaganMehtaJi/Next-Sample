import React from "react";
import { Component } from "react";
export default class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        returnn(
            <>
            <div  style={{ width:"180px",height:"150px",marginTop:"8px",marginLeft:"20px"}}>
                <center>
                    <img src={this.props.value.course_image} alt="not found" style={{ width:"150px",height:"150px",border:"2px solid black",borderRadius:"100px",boxShadow:"2px 2px 40px black"}} />
                    <label style={{width:"180px",color:"white",}}>{this.props.value.course_name}</label><br/>
                    <label style={{width:"180px",color:"white",}}>{this.props.value.course_about}</label><br/>
                    <label style={{height:"30px",width:"180px",color:"white",}}>{this.props.value.course_cost}</label><br/>
                <h1>{this.props.value.course_id}</h1>
                </center>
            </div>
            </>
        );
    }
}