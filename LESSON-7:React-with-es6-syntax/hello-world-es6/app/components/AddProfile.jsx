import React from 'react'

export default class AddProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            bio: '',
            hobby: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleHobby = this.handleHobby.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleName(e) {
        this.setState({name: e.target.value})
    }
    handleAge(e) {
        this.setState({age: e.target.value})
    }
    handleBio(e) {
        this.setState({bio: e.target.value})
    }
    handleHobby(e) {
        this.setState({hobby: e.target.value})
    }
    handleClick(e) {
        let newProfile = {
            name: this.state.name,
            age: this.state.age,
            bio: this.state.bio,
            hobbies: [this.state.hobby]
        }
        this.props.addUser(newProfile)
    }

    render() {
        return (
            <div>
                <h2>Add a new Profile</h2>
                <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.age}</p>
                    <p>{this.state.bio}</p>
                    <p>{this.state.hobby}</p>
                </div>
                <input onChange={this.handleName} value={this.state.name} placeholder='name'/>
                <input onChange={this.handleAge} value={this.state.age} placeholder='age'/>
                <input onChange={this.handleBio} value={this.state.bio} placeholder='bio'/>
                <input onChange={this.handleHobby} value={this.state.hobby} placeholder='hobby'/>
                <button onClick={this.handleClick}>Add new profile</button>
            </div>
        )
    }
}
