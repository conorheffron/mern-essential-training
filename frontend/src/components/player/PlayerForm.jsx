/* eslint-disable react/no-string-refs */
import React from 'react'
import axios from 'axios'

class PlayerForm extends React.Component {
  submitPlayer(event) {
    event.preventDefault()

    axios
      .post('http://localhost:4000/players', {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        phone: this.phone.value,
        email: this.email.value,
        strength: this.strength.value,
        endurance: this.endurance.value,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new Player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" ref="firstName" type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" ref="lastName" type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="phone" ref="phone" type="text" />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input id="email" ref="email" type="text" />
              <label htmlFor="email">e-mail</label>
            </div>
            <div className="input-field col s6">
              <input id="strength" ref="strength" type="text" />
              <label htmlFor="strength">Strength</label>
            </div>
            <div className="input-field col s6">
              <input id="endurance" ref="endurance" type="text" />
              <label htmlFor="endurance">Endurance</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Add Player
          </button>
        </form>
      </div>
    )
  }
}

export default PlayerForm