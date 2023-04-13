import {Link} from 'react-router-dom'

import IdAndTitleContext from '../../context/IdAndTitleContext'
import './index.css'

const TodosList = props => (
  <IdAndTitleContext.Consumer>
    {value => {
      const {getTodoIdTitle} = value

      const {eachUser} = props
      const {userId, id, title, completed} = eachUser
      const status = completed ? 'Complete' : 'Incomplete'

      const AddIdandTitle = () => {
        getTodoIdTitle(id, title)
      }

      return (
        <li className="user-details-container">
          <p className="row-styling">{id}</p>
          <p className="row-styling">{title}</p>
          <p className="row-styling">{status}</p>
          <Link to={`/users/${userId}`}>
            <button type="button" className="view-btn" onClick={AddIdandTitle}>
              View User
            </button>
          </Link>
        </li>
      )
    }}
  </IdAndTitleContext.Consumer>
)

export default TodosList
