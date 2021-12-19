import { Component } from "react";

class MeetupItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				{/* <h2>{this.props.location}</h2> */}
				<h1>meetup item</h1>
			</div>
		)
	}
}

export default MeetupItem;