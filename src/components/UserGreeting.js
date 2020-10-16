import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Meet</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        return this.state.isLoggedIn ? <div>Welcome Meet</div> : <div>Welcome Guest</div>

        // return this.state.isLoggedIn && <div>Welcome Meet</div>


        
    }
}

export default UserGreeting
