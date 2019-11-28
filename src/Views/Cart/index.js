import React, { Component } from 'react'
import style from './style.module.css'
import { connect } from "react-redux";
import Axios from '_axios@0.19.0@axios';
import I from '../Component/Checkbox'

class index extends Component {
  state = {
    haveCommodity: true,
    cartList: null,
    isshow: true
  }

  render() {
    return (
      <div className={style.all}>
        <header className={style.header}>
          <a>编辑</a>
          <h1 className={style.header_title}>购物车</h1>
        </header>
        <main className={style.main}>
          {
            this.state.cartList === null ?
              <div className={style.empty_container} >
                <div className={style.empty_img}></div>
                <h3>购物车暂无商品</h3>
                <p>添加到购物车的商品会显示到这里</p>
                <a className={style.buy} onClick={this.handleTo}>
                  现在选购
            </a>
              </div>
              :
              <div className={style.cartlist}>
                <div className={style.cartheader}>
                  <i></i>
                  <label> 点击领取优惠券 </label>
                  <i></i>
                </div>
                <div className={style.item_list}>
                  <ul>
                    {
                      this.state.cartList.map((item, index) => (
                        <li key={item.id} style={{
                          marginBottom: '6px',
                          position: 'relative',
                          background: '#fff',
                          boxShadow: '0 5px 13px rgba(0, 0, 0, .1)'
                        }}>
                          <div className={style.cart_item}>
                            <div className={style.checkbox_container}>
                                <I></I>
                              <div className={style.item_wrapper}>
                                <a href="/film">
                                  <img src={item.shop_info.ali_image} />
                                </a>
                              </div>
                              <div className={style.item_info_container}>
                                <h4> {item.shop_info.title} </h4>
                                <p> {
                                  item.name.substr(item.name.indexOf('（'))
                                } </p>
                                <div>
                                  <span></span>
                                  <span> {'￥' + item.price+ '.00'} </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
          }
        </main>
      </div >
    )
  }
  handleTo = () => {
    console.log(this.props.history.push)
    this.props.history.push('/film')
  }

  // static getDerivedStateFromProps(n ,nextstate) {
  //   return null
  // }
  handleChangeShow = () => [
    this.setState({
      isshow: !this.state.isshow
    })
  ]

  componentDidMount() {
    Axios({
      url: '/product/skus?ids=100039732,100059101,100059716,100060202,100060204&with_stock=true&with_spu=true'
    }).then(res => {
      this.setState({
        cartList: res.data.data.list
      }, () => {
        // console.log(item.shop_info.ali_image)
      })
      console.log(res.data.data.list)
    })
  }
}

export default index

//点开购物车
