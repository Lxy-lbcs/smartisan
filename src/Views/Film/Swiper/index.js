import React, { Component } from 'react'
import { Carousel } from 'antd';
import Axios from 'axios';
import style from './index.module.scss'


export default class Swiper extends Component {

    state= {
        kvBanner:[]
    }
    render() {
        return (
                <Carousel autoplay className={style.Carousel}>
                        {

                            this.state.kvBanner.map(item => <div key={item.url}>
                                <img src={item.image} />
                            </div>)
                        }
                </Carousel>
        )
    }

    componentDidMount() {
        Axios.get("/mobile/home").then(res => {
          console.log(res.data.data)
          this.setState({
            kvBanner: res.data.data[0].list
          })
        })
      }
}
