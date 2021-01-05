import React from 'react'
import ReactDOM from 'react-dom'
import {FancyButton} from './FancyButton'

type Props = {
  firstName: string
  userId: string
}

type State = {
  isLoading: boolean
}

class SignupForm extends React.Component<Props, State>{
  state = {
    isLoading: false
  }
  render() {
    return (
    <React.Fragment>
      <h2>Sign up for a 7-day supply of our tasty toothpaste now, {this.props.firstName}</h2>
      <FancyButton
        isDisabled={this.state.isLoading}
        size='Big'
        text='Sign up now'
        onClick={this.signUp}
      />
    </React.Fragment>  
    )
  }

  private signUp = async() => {
    this.setState({isLoading: true})
    try {
      await fetch(`/api/signup>userID=${this.props.userId}`)
    } finally {
      this.setState({isLoading: false})
    }
  }
}

let form = <SignupForm firstName='firstname san' userId='1234' />

ReactDOM.render(form, document.querySelector('#app'))