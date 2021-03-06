import React from 'react';
import ASNSearch from './ASNSearch';
import ASNDisplay from './ASNDisplay';
import axios from 'axios';
import {BrowserRouter} from 'react-router';
import BackButton from './BackButton';


class DockDoor extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectDoor: 0,
			dockDoors: [],
			redirect: false
		}
		
		
	}

   selected = (selection) => (event) => {
   	this.setState({[selection]: event.target.value })
   }

   componentDidMount(){
	var dockDoors = [];

   	console.log("checking for dock doors");
   	axios({
			method: 'get',
			headers: {"Access-Control-Allow-Origin": "*"},
			url: `${window.apiurl}/getDockDoor`
		}).then(results =>{
			results.data.forEach((element, index)=>{
				let num = element.dockDoorNumber;
				console.log(num);
				dockDoors.push(
					<option value={num}>{num}</option>
					);
				console.log("index ", index, "element", element)
				if (index == results.data.length-1) {

					console.log(results.data.length);
					this.setState({
						dockDoors: dockDoors
					});
				}
			});
				
		});
   }
  

   render() {
	      return (
	      	<div className="dock-door">
	      		
	        	<form>
		      	<label>Select Dock Door: </label>
		      		<select onChange={this.selected('selectDoor')}>
		      			<option value="0">Select</option>
		      			{this.state.dockDoors}
		      		</select>

		      		<ASNSearch history={this.props.history} doorNumber={this.state.selectDoor}/>



		      		

		      		
	      	</form>
	      	</div>
       
      );
   }
}
export default DockDoor