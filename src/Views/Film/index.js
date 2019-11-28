import React, { Component } from 'react'
import style from './style.module.css'

export default class index extends Component {
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
}
