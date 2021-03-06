import React from 'react'

/*export default class Profile extends React.Component {
        render() {
                let hobbies = this.props.hobbies.map(hobby => {
                        return <li>{hobby}</li>
                })
                return (
                        <div>
                                <h3>{this.props.name}</h3>
                                <p>{this.props.name} is {this.props.age}.</p>
                                <p>{this.props.name} says: <quote>{this.props.bio}</quote></p>
                                <h3>Hobbies:</h3>
                                <ul>
                                        {hobbies}
                                </ul>
                        </div>
                )
        }
}*/

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
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>

)

export default Profile
