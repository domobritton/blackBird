import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='SAN FRANCISCO, CA'/>
        <input type='text' placeholder='CITY'/>
      </div>
    )
  }
}
