// import React, { Component } from 'react'
// import Axios from '_axios@0.19.0@axios'
// import style from './index.module.scss'

// export default class index extends Component {

//   state = {
//     datalist:[],
//   }
//   render() {
//     return (
//       <div id={style.digital}>
//         <div className={style.left}></div>
//         {
//           this.state.datalist.map((item)=>
//             <div>
//                <h1>{item.classifyName}</h1>
//                {item.third.map(data=>
//                   <img src={data.image}/>
//                 )}
//             </div>
//            )
//         }
//       </div>
//     )
//   }
//     componentDidMount() {
//       Axios.get("/mobile/classify").then(res=>{
//         // console.log(res.data.data[0].second)
//         this.setState({
//           datalist:res.data.data[0].second
//         })
//       })
//     }
// }
