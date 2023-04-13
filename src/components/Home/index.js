import {FiSearch} from 'react-icons/fi'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TodosList from '../TodosList'
import './index.css'

class Home extends Component {
  state = {
    todosData: [],
    searchInput: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTodosDetals()
  }

  getTodosDetals = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(apiUrl)

    if (response.ok) {
      const data = await response.json()
      this.setState({todosData: data, isLoading: false})
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, todosData, isLoading} = this.state
    const searchResults = todosData.filter(eachTodo =>
      JSON.stringify(eachTodo)
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="main-head">Todos</h1>
          <div className="input-card">
            <FiSearch className="search" />
            <input
              type="search"
              className="search-input"
              placeholder="Search..."
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="body-container">
          {isLoading ? (
            <div className="loader-container">
              <div className="products-loader-container">
                <Loader
                  type="ThreeDots"
                  color="#42f545"
                  height="50"
                  width="50"
                />
              </div>
            </div>
          ) : (
            <>
              <ul className="column-names-container">
                <li className="column-name">ToDo Id</li>
                <li className="column-name">Title</li>
                <li className="column-name">Status</li>
                <li className="column-name">Action</li>
              </ul>
              <ul className="ul-list">
                {searchResults.map(eachUser => (
                  <TodosList
                    eachUser={eachUser}
                    id={eachUser.id}
                    title={eachUser.title}
                    key={eachUser.id}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
