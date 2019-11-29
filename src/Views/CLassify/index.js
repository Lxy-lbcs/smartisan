import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'
import style from './index.module.scss'
import Axios from '_axios@0.19.0@axios'

export default class index extends Component {
  state = {
    datalist:[]
  }
  render() {
    return (
      <header id={style.head}>
        <div className={style.toubu}>
          <span className="iconfont icon-fangdajing"></span>
          <p>请输入搜索关键字</p>
        </div>
        <div className={style.cebian}>
          <ul className={style.cebianRouter}>
            {
              this.state.datalist.map((item,index)=>
                <li key={index} onClick={this.handleClick.bind(this,index)}>
                  {item.classifyName}
                </li>
                )
            }
          </ul>
        </div>
      </header>
    )
  }
  handleClick(id){
    // console.log(id)
    // 处理数据的筛选
    switch(id) {
      case "0":
        return datalist[0]
      case "1":
        return datalist[1]
      case "2":
        return datalist[2]
      case "3":
        return datalist[3]
      case "4":
        return datalist[4]
      case "5":
        return datalist[5]
      case "6":
        return datalist[6]
    }
  }
      componentDidMount() {
        Axios.get("/mobile/classify").then(res=>{
          this.setState({
            datalist:res.data.data
          })
        })
      }
}