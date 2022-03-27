import React, { useState, useEffect } from 'react'

const AddQuestion = (props) => {
  let emptyQuestion = { name: '', comment: '' }
  const [question, setQuestion] = useState(emptyQuestion)

  const handleChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(question)
  }
  return (
    <>
      <details>
      <summary>Click Here to Ask a Question or Add a Comment. </summary>
         <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name(optional):</label>
        <input type="text" name="name"value={question.name} onChange={handleChange} />
          <br />
        <label htmlFor="question">Your Question/Comment: </label>
        <input type="text" name="question" value={question.question} onChange={handleChange} />
          <br />
        <input type="submit"/>
      </form>
      </details>
    </>
  )
}

export default AddQuestion
