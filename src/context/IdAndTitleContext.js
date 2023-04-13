import React from 'react'

const IdAndTitleContext = React.createContext({
  todoId: '',
  todoTitle: '',
  getTodoIdTitle: () => {},
})

export default IdAndTitleContext
