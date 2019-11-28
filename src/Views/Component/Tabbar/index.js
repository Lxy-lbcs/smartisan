import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <div>

        <ul className='footer'>
          <li>
            <NavLink to="/film" activeClassName='active' activeStyle={{
              color: '#d44d44'
            }}>
            <span className='icon icon1'></span>首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/classify" activeClassName='active' activeStyle={{
              color: '#d44d44'
            }}>
            <span className='icon icon2'></span>
            <span className='name'> 分类 </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName='active' activeStyle={{
              color: '#d44d44'
            }}>
            <span className='icon icon3'></span>购物车
            </NavLink>
          </li>
          <li>
            <NavLink to="/my" activeClassName='active' activeStyle={{
              color: '#d44d44'
            }}>
            <span className='icon icon4'></span>个人中心
            </NavLink>
          </li>
        </ul>

      </div>
    )
  }
}
