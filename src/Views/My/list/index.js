import React from 'react';
import './style.css';

class List extends React.Component{
  render(){
    return <div className='user-list' onClick={this.jump.bind(this,this.props.url)}>
        <div>{this.props.title}</div>
    </div>
  }
  jump(url){
    this.props.history.push(url);
  }
}

export default List;
