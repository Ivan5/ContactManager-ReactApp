import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">
        Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContact;