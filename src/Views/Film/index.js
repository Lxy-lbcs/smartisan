import React, { Component } from 'react'

import style from './style.module.css'

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
      <div className={style.all}>
        <header className={style.header}>
          <figure className={style.logo}></figure>
        </header>
        <section className={style.section}>
          <div className={style.search}>
            <aside className={style.search_icon}></aside>
            <aside className={style.search_val}>请输入搜索关键字</aside>
          </div>
        </section>
        <main className={style.main}>

        </main>
        <aside className={style.aside}>

        </aside>
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
