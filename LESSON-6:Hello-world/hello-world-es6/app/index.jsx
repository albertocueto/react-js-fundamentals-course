import React from 'react'
import ReactDOM from 'react-dom'

//JSX is xml based, you HAVE to close the tags:
//Also, this is old react code, ES6 es different, with the class syntax

/*var X = React.createClass({
	render: function() {
		return (
			<p> X </p>
		)
	}
})*/

var App = React.createClass({
	getInitialState: function() {
		return {
			profiles: [
				{name: 'Alberto'},
				{name: 'Cueto'}
			]
		}
	},
	render: function() {
		//Functions can only return one return value, like everything wrapped up on a div
		//return React.createElement('p', {}, 'Hello world! (from script)')
		/*var elements = (
			<div>
				<p>More stuff!</p>
				<p>Hello WORLD!</p>
				//<X />
			</div> )
		return elements*/
		console.log(this.state)
		return (
			<section>				
				<p>Remember some math: 2 + 2 = {2+2}</p>
				<p>{name === 'Cueto' ? 'hello Cueto' : 'Hello stranger'}</p>
				<section>
					<h3>Profile 1</h3>
					<p>{this.state.profiles[0].name}</p>
				</section>
				<section>
                                        <h3>Profile 2</h3>
                                        <p>{this.state.profiles[1].name}</p>
                                </section>

			</section>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));
/*ReactDOM.render(<X />, document.getElementById('app2'));*/
