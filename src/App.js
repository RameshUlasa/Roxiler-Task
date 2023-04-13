import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import IdAndTitleContext from './context/IdAndTitleContext'
import Home from './components/Home'
import UserDetails from './components/UserDetails'

import './App.css'

class App extends Component {
  state = {
    todoId: '',
    todoTitle: '',
  }

  getTodoIdTitle = (todoId, title) => {
    this.setState({todoId, todoTitle: title})
  }

  render() {
    const {todoId, todoTitle} = this.state
    return (
      <BrowserRouter>
        <IdAndTitleContext.Provider
          value={{todoId, todoTitle, getTodoIdTitle: this.getTodoIdTitle}}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:id" component={UserDetails} />
          </Switch>
        </IdAndTitleContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
