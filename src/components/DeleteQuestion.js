import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const DeleteQuestion = (props) => {
  // let emptyQuestion = {id: props.id, name: '', question: '' }
  // const [question, setQuestion] = useState(emptyQuestion)
  const {isAuthenticated } = useAuth0()

  const handleDelete = (event) => {
    event.preventDefault()
    props.handleDeleteQuestion()
  }


  return (
      isAuthenticated && (
    <>
      <button onClick={handleDelete}> Delete Your Question</button>
    </>
    ): null
  )
}

export default DeleteQuestion
