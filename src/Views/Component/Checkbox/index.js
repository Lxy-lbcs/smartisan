import React, { Component } from 'react'
import style from '../../Cart/style.module.css'
export default class Checkbox extends Component {

  state = {
    isshow : false
  }
  render() {
    return (
      <i onClick={this.handleClick} className={this.state.isshow ? style.checkbox + ' ' + style.show : style.checkbox}></i>
    )
  }
  handleClick = () => {
    this.setState({
      isshow: !this.state.isshow
    })
  }
}
