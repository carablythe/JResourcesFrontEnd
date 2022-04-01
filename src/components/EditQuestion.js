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
        <summary class = "clickHere"><b>Click Here to Edit Your Question</b></summary>
          <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Edit Your Name: </label>
          <input
            type="text"
            name="name"
            value={question.name}
            onChange={handleChange}/>
            <br />
          <label htmlFor="question">Edit your Question/Comment: </label>
            <br />
          <textarea
            name="question"
            value={question.question}
            onChange={handleChange}>
            </textarea>
              <br />
          <input className = "submit" type="submit" />
        </form>
      </details>
        <br />
    </>
  )
}

export default EditQuestion
