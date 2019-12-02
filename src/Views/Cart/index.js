import React, { Component } from 'react'
import style from './style.module.css'
import { connect } from "react-redux";
import Axios from '_axios@0.19.0@axios';
import I from '../Component/Checkbox'

class index extends Component {
  state = {
    haveCommodity: true,
    cartList: null,
    recommendList: null,
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
                                  <span> {'￥' + item.price + '.00'} <i> x 1</i> </span>
                                </div>
                              </div>
                            </div>
                            {
                              item.name.indexOf('坚果') !== -1 ?
                                <div className={style.warnanty}>
                                  <div className={style.add_btn}>
                                    <span></span>
                                  </div>
                                  <div className={style.add_detail}>
                                    <p>购买 坚果 Pro 3 手机保修服务，折算后每天仅需 <span className={style.price_num}>0.41</span>元。 <a href="">进一步了解详情></a> </p>
                                  </div>
                                </div>
                                :
                                null
                            }
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={style.recommend}>
                  <div className={style.recommend_title}>
                    <h2>相关推荐</h2>
                  </div>
                  <div className={style.recommend_container}>
                    <ul style={{
                      overflow: 'hidden',
                      padding: '.9rem .6rem 0',
                      marginBottom: '80px'
                    }}>
                      {
                        this.state.recommendList === null ? null :
                          this.state.recommendList.map(item => (
                            <li key={item.id} style={{
                              width: '50%',
                              float: 'left',
                            }} >
                              <div>
                                <a href="/film" style={{
                                  display: 'block',
                                  position: 'relative',
                                  paddingTop: '100%',
                                  borderRadius: '.2rem'
                                }}>
                                  <img src={item.shop_info.ali_image} alt="" style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '.2rem'
                                  }} />
                                </a>
                                <div style={{
                                  margin: '0 auto',
                                  padding: '.4rem .6rem .9rem'
                                }}>
                                  <h4 style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    margin: 0,
                                    fontSize: '.6rem',
                                    color: '#333'
                                  }}>
                                    {item.name}
                                  </h4>
                                  <p style={{
                                    marginTop: '.3rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    fontSize: '.5rem',
                                    lineHeight: '1.2',
                                    color: '#7f7f7f',
                                    minHeight: '.6rem'
                                  }}>
                                    {item.shop_info.sku_mobile_sub_title}
                                  </p>
                                  <span style={{
                                    color: '#d44d44',
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap',
                                    fontWeight: '700',
                                    position: 'relative',
                                    top: '.15rem',
                                    left: '-.1rem',
                                    fontSize: '.6rem'
                                  }}>
                                    ￥{item.spu.price}.00
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))
                      }
                    </ul>
                  </div>
                </div>
                <div style={{
                  position: 'fixed',
                  height: '54px',
                  padding: ' 0 12px',
                  bottom: '56px',
                  left: 0,
                  right: 0,
                  zIndex: '90',
                  background: '#fafafa',
                  boxShadow: '0 -0.2rem 1rem rgba(0,0,0,.1)',
                  fontSize: '12px',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                 
                }}></div>
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
      })
    })

    Axios({
      url: '/product/skus?ids=100047001,100061001,100060501,100060201,100060201,100060202,100061001,100060901,100060401,100060601,100061101,100061201,100062701,100063401,100061801,100059001,100052801,100023501,100059808,100059726,100059315,100059401,100059901,100061001&with_stock=true&with_spu=true'
    }).then(res => {
      console.log(res.data.data.list)
      this.setState({
        recommendList: res.data.data.list
      })
    })
  }
}

export default index

//点开购物车
