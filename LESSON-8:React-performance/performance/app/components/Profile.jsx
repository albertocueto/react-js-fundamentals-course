import React from 'react'

export default class Profile extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.name !== this.props.name
    }

    render() {
        console.log('profile rendered')
        /*let hobbies = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>
  })*/
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.name}
                    is {this.props.age}.</p>
                <p>{this.props.name}
                    says:
                    <quote>{this.props.bio}</quote>
                </p>
                <h3>Hobbies:</h3>
                <ul>
                    {this.props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
            </div>
        )
    }
}
/*
let Profile = props => (
    <div>
        <h3>{props.name}</h3>
        <p>{props.name}
            is {props.age}.</p>
        <p>{props.name}
            says:
            <quote>{props.bio}</quote>
        </p>
        <h3>Hobbies:</h3>
        <ul>
            {props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
    </div>

)

export default Profile*/
