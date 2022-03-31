import React, { useState} from 'react'

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
      <summary class = "clickHere">Click Here to Ask a Question or Add a Comment</summary>
         <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
          <br/>
        <input type="text" name="name"value={question.name} onChange={handleChange} />
          <br />
        <label htmlFor="question">Your Question/Comment: </label>
          <br />
        <textarea name="question" value={question.question} onChange={handleChange}>
        </textarea>
          <br />
        <input className = "submit" type="submit"/>
      </form>
      </details>
    </>
  )
}

export default AddQuestion
