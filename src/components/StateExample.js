import React,{Component} from 'react'
import Welcome from './Welcome'

class StateExample extends Component{
    constructor() {
        super()
        this.state = {
            msg:'Welcome Visitor'
        }
    }

    changeMsg() {
        this.setState({
            msg:'Thank you for clicking'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.msg}
                </h1>
                <button onClick={()=>this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default StateExample