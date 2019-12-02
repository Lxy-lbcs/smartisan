import React, { Component } from 'react'
import SearchTop from './Search'
import Swiper from './Swiper'
import Ugly from './Ugly'
import Axios from 'axios'
import store from '../redux/store'

export default class index extends Component {
  state = {
    datalist: []
  }
  render() {
    return (
      <div>
        <SearchTop></SearchTop>
        <Swiper></Swiper>
        <Ugly datalist></Ugly>
      </div>
    )
  }

  componentWillUnmount() {
    console.log("unmount")
    store.dispatch(
      {
        type: "ShowTabbar",
        payload: true
      }
    )
  }
  componentDidMount() {      

    Axios.get("/mobile/home").then(res => {
      this.setState({
        datalist: res.data.data
      },() => {
        console.log(this.state.datalist)

      })
      store.dispatch(
        {
          type: "data",
          payload:res.data.data
        }
        )
    })
  }

}
