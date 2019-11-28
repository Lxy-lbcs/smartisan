import React from 'react'
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Panel } = Collapse;

const customPanelStyle = {
    background: '#fff',
    overflow: 'hidden'
};

class Accordion extends React.Component {
    showhtml(htmlString) {
        var html = { __html: htmlString };
        return <div dangerouslySetInnerHTML={html}></div>;
    }
    render() {
        return <div className='bdrtop6'>
            <Collapse accordion>
                {this.props.data.map(item => (
                    <Panel header={item.title} key={item.title} style={customPanelStyle}>
                            {item.list.map(item => (
                                <li key={item.title} onClick={this.jump.bind(this,item.url)}>
                                    <p>{item.title}</p>
                                </li>
                            ))}
                    </Panel>
                ))}
            </Collapse>
        </div>
    }
    jump(url){
        console.log(url);
    }
}

export default Accordion