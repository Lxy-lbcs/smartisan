import React from 'react'
import Accordion from '../../Component/Accordion/index'
import UserHeader from '../userHeader/index'
class Salesroom extends React.Component {
    state = {
        accordionDatalist: [{
            title: '订单服务',
            list: [{title:'购买指南',url:'1'},{title: '送货政策',url: '2'}]
        },{
            title: '技术服务',
            list: [{title:'零售门店',url:'3'},{title: '自助服务',url: '4'},{title: '维修门店',url: '5'}]
        },{
            title: '媒体中心',
            list: [{title:'新闻动态',url:'6'},{title: '官方视频',url: '7'},{title: '图片资源',url: '8'}]
        },{
            title: '关注我们',
            list: [{title:'新浪微博',url:'9'},{title: '官方微信',url: 'J'},{title: '荣誉奖项',url: 'Q'}]
        }]
    }
    render() {
        return <div id='user_salesroom'>
            <UserHeader></UserHeader>
            <div className='whiteSpace'></div>
            <Accordion {...this.props} data={this.state.accordionDatalist}></Accordion>
        </div>
    }
}

export default Salesroom