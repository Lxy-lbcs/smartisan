import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <div>

        <ul className='footer'>
          <li> <NavLink to="/film" activeStyle={{
            color: '#d44d44'
          }}>首页</NavLink></li>
          <li><NavLink to="/classify" activeStyle={{
            color: '#d44d44'
          }}>分类</NavLink></li>
          <li><NavLink to="/cart" activeStyle={{
            color: '#d44d44'
          }}>购物车</NavLink></li>
          <li><NavLink to="/my" activeStyle={{
            color: '#d44d44'
          }}>个人中心</NavLink></li>
        </ul>

      </div>
    )
  }
}
