import React from 'react'

class Content extends React.Component{
    state = {
        datalist:[]
    }
    render() {
        return <div>
            {
                this.state.datalist.map(item => {
                    <li>
                        <h1></h1>
                        <img src=""/>
                        <p></p>
                    </li>
                })
            }
        </div>
    }
}

export default Content