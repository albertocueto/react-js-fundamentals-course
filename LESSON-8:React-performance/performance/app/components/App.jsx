import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

import {getProfiles} from '../utils/profileApi.js'

//Functional stateless practice:
//Normal:
/*class MyComponent extends React.Component {
	render() {
		<p>{this.props.hello}</p>
	}
}*/

//Function stateless component:
var MyComponent = props => (
    <div>
        <p>I am a functional component</p>
        <p>{props.x}</p>
    </div>
)

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            /*profiles: [
                {
                    name: 'Alberto',
                    age: 30,
                    hobbies: [
                        'Rock climbing', 'Videogames'
                    ],
                    bio: 'I\'ve come a long way'
                }, {
                    name: 'Cueto',
                    age: 30,
                    hobbies: [
                        'Reading', 'Programming'
                    ],
                    bio: 'I Enjoy reading and programming'
                }
            ]*/
            profiles: [], //Initialize as an empty array since other components expect the array to exist beforehand
            lastId: 0
}
        this.addUser = this.addUser.bind(this)
    }

    componentDidMount() {
        //We moved this logic to its own file because that makes the logic reusable and it's better for unit testing:
        /*
        fetch('http://localhost:3000/profiles.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({profiles: data})
            })
            .catch(err => {
                console.log(err)
            })*/
            /*let newProfiles = profiles.map((profile, i) => {
              return profile['key'] = index
            })*/
        let profiles = getProfiles().then(profiles => {
          profiles.map((profile, i) => {
            profile['id'] = i
            return profile
          })

          this.setState({profiles: profiles})
        })
        /*profiles.map((profile, i) => {
          return profile['key'] = index
        }).then(profiles => {
          this.setState({profiles: profiles})
        })*/
    }

    addUser(newProfile) {
        /*var user = {
			name: 'José',
                        age: 30,
                        hobbies: ['Rock climbing', 'Videogames', 'Reading', 'Programming'],
                        bio: 'I\'ve come a long way and I enjoy reading and programming'
		}
		this.setState({
			profiles: this.state.profiles.concat([user])
		})*/
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }

    render() {
        console.log('app rendered')
        let profiles = this.state.profiles.map(profile => {
            return (<Profile key={profile.id} name={profile.name} age={profile.age} bio={profile.bio} hobbies={profile.hobbies}/>)
        })
        return (
            <div>
                <MyComponent x="X Message"/>
                <AddProfile addUser={this.addUser} lastId={this.state.lastId}/> {profiles}
            </div>
        )
    }
}
