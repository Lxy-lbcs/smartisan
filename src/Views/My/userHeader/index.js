import React from 'react'
import { Drawer, Button, Radio } from 'antd';
import './style.css'

const RadioGroup = Radio.Group;

class UserHeader extends React.Component {
    state = { visible: false, placement: 'top' };

    showDrawer = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        return <div className='user_header'>
            <span onClick={this.showDrawer} className='menuBtn'></span>
            <span className='nav-logo'></span>
            <Drawer
                placement={this.state.placement}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                height= {document.documentElement.clientHeight}
                drawerStyle= {{background: '#000'}}
            >
                <div className='drawer-box'>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: ''}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                </div>
                <div className='drawer-box'>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                </div>
                <div className='drawer-box'>
                    <div className='drawer-items'>
                        <div className='drawer-items-icon' style={{backgroundPositionY: '0'}}></div>
                        <p className='drawer-items-name'>锤子商城</p>
                    </div>
                    <div className='drawer-items'>
                    </div>
                    <div className='drawer-items'>
                    </div>
                    <div className='drawer-items'>
                    </div>
                </div>
            </Drawer>
        </div>
    }
}

export default UserHeader