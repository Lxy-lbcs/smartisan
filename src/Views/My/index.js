import React from 'react';
import List from './list/index';
import './style.css';

class User extends React.Component{
  render(){
    return <div id='user'>
        <div className='header'>个人中心</div>
        <div className='common-box'>
            <div className='user-info'></div>
        </div>
        <div className='common-box'>
            <List title='地址管理'></List>
            <List title='我的优惠券'></List>
            <List title='优先购买码'></List>
        </div>
        <div className='common-box'>
            <List title='零售门店' url='/my/salesroom' {...this.props}></List>
            <List title='以旧换新'></List>
            <List title='常见问题'></List>
            <List title='服务支持'></List>
        </div>
        <div className='common-box'>
            <List title='以外碎屏保修服务'></List>
            <List title='延长保修服务'></List>
        </div>
    </div>
  }
}

export default User;
