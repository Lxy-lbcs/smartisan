import React,{Component} from 'react';
import './App.css';
import Tabbar from './Views/Component/Tabbar'
class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
        <Tabbar />
      </div>
    )
  }

}


export default App;
