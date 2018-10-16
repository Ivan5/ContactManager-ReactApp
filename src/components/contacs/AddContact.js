import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">
        Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control from-control-lg" placeholder="Enter name" name="name" value={name}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control from-control-lg" placeholder="Enter a Email" name="email" value={email}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input className="form-control from-control-lg" placeholder="Enter a Phone" name="phone" value={phone}/>
            </div>
            <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;