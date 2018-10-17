import React, { Component } from 'react';
import { Consumer } from '../../contacs';
import uuid from 'uuid';

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
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input className="form-control from-control-lg" placeholder="Enter name" name="name" value={name} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input className="form-control from-control-lg" placeholder="Enter a Email" name="email" value={email} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input className="form-control from-control-lg" placeholder="Enter a Phone" name="phone" value={phone} onChange={this.onChange}/>
                    </div>
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