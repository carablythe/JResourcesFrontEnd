import React, { useState } from 'react'

const EditQuestion = (props) => {
  let emptyQuestion = {id: props.id, name: '', question: '' }
  const [question, setQuestion] = useState(emptyQuestion)


  const handleChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(question)
  }


  return (
    <>
      <details>
        <summary>Click Here to Edit Your Question</summary>
          <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={question.name}
            onChange={handleChange}/>
            <br />
          <label htmlFor="question">Question/Comment: </label>
          <input
            type="text"
            name="question"
            value={question.question}
            onChange={handleChange}/>
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default EditQuestion
