import React, { Component } from 'react';
import { Consumer } from '../../contacs';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = (dispatch,e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContantac = {
      id: uuid(),
      name,
      email,
      phone
    }

    dispatch({type: 'ADD_CONTACT', payload: newContantac });

    //Clear inputs
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card mb-3">
                <div className="card-header">
                Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter a Name..."
                      value={name}
                      onChange={this.onChange}   
                    />
                    <TextInputGroup
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter a Email..."
                      value={email}
                      onChange={this.onChange}   
                    />
                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      placeholder="Enter a Phone..."
                      value={phone}
                      onChange={this.onChange}   
                    />
                    <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
                  </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;