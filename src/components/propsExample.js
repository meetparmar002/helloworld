import React,{Component} from 'react'


// const PropsExample= (props)=> {
//   console.log(props)
//   return (<div>
//     <h1>Hello {props.name} aka {props.heroName}</h1>
//     {props.children}
//     </div>)
// }

class PropsExample extends Component{
  render() {
    let {name,heroName}=this.props
    return (
      <div>
        <h1>
          Welcome {name} aka {heroName}
        </h1>
        {this.props.children}
      </div>
    )
  }
}

// const PropsExample = props => {
//   let { name, heroName } = props
//   console.log(name, heroName)
//   return (
//     <div>
//       <h1>Welcome {name} aka {heroName}</h1>
//       {/* {props.children} */}
//     </div>
//   )
// }

export default PropsExample
