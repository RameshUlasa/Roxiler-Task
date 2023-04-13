import {Component} from 'react'

import IdAndTitleContext from '../../context/IdAndTitleContext'
import './index.css'

class UserDetails extends Component {
  state = {
    userData: {},
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({userData: data})
    }
  }

  render() {
    return (
      <IdAndTitleContext.Consumer>
        {value => {
          const {todoId, todoTitle} = value
          const {userData} = this.state
          const {id, name, email} = userData

          return (
            <div className="details-container">
              <h1 className="user-details-heading">User Details</h1>
              <div className="card">
                <p className="column">Todo Id</p>
                <p>{todoId}</p>
              </div>
              <div className="card">
                <p className="column">Todo Title</p>
                <p>{todoTitle}</p>
              </div>
              <div className="card">
                <p className="column">User Id</p>
                <p>{id}</p>
              </div>
              <div className="card">
                <p className="column">Name</p>
                <p>{name}</p>
              </div>
              <div className="card">
                <p className="column">Email</p>
                <p>{email}</p>
              </div>
            </div>
          )
        }}
      </IdAndTitleContext.Consumer>
    )
  }
}

export default UserDetails
