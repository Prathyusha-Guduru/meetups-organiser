import { Component } from "react";
import MeetupItem from "../components/MeetupItem";


export default class Home extends Component{
  render(){
    return(
      <div>
        <h1>Hello</h1>
        <MeetupItem location="Hyderabad" />
      </div>
    )
  }
}