import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/item_actions';
class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);
        this.toggle();
    }

    render() {
        return(
        <div>
            <Button
            color="dark"
            style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
            >Add item</Button>
             <Modal 
             isOpen={this.state.modal} 
             toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add item</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="item">Add a note</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Write here"
                onChange={this.onChange}
              />
              <Button color="dark" 
              style={{ marginTop: '2rem' }} block>
                Add item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
        </div>
        );
    }
}
const mapStateToProps = state => ({
    item:state.iyem
});
export default connect(mapStateToProps, { addItem })(ItemModal);