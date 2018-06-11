import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

class SavedPage extends Component{

	constructor(){
		super();
	}


	componentDidMount(){
		setTimeout(()=>{this.props.history.push("/")}, 5000);
	}

	render(){
		return(
			<div className="static-modal">
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>One fine body...</Modal.Body>

    <Modal.Footer>
      <Button>Close</Button>
      <Button bsStyle="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  </div>

		)
	}

}

export default SavedPage