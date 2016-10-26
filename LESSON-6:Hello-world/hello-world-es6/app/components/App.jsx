import React from 'react'


import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			profiles: [
				{
					name: 'Alberto', 
					age: 30, 
					hobbies: ['Rock climbing', 'Videogames'],
					bio: 'I\'ve come a long way'
				},
				{
					name: 'Cueto', 
					age: 30, 
					hobbies: ['Reading', 'Programming'],
					bio: 'I Enjoy reading and programming'
				}
			]
		}
		this.addUser = this.addUser.bind(this)
	}

	addUser(newProfile) {
		console.log(this)
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
		let profiles = this.state.profiles.map(profile => {
			return (
	                        <Profile
                	                name={profile.name}
                        	        age={profile.age}
                                	bio={profile.bio}
	                                hobbies={profile.hobbies}
        	                 />
	
			)
		})
		return (
			<div>
				<AddProfile addUser={this.addUser} />
				{profiles}
			</div>
		)
	}
}
