import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddQuestion from '../components/AddQuestion'
import EditQuestion from '../components/EditQuestion'

const Forum = () => {
  const [questions, setQuestions] = useState([])


  const getQuestions = () => {
    axios
      .get('https://japanresources.herokuapp.com/api/forum')
      .then(
        (response) => setQuestions(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    }


  const handleCreateQuestion = (addQuestion) => {
    axios
      .post('https://japanresources.herokuapp.com/api/forum', addQuestion)
      .then((response) => {
        console.log(response)
        getQuestions()
      })
    }


  const handleUpdateQuestion = (editQuestion) => {
    console.log(editQuestion)
    axios
      .put('https://japanresources.herokuapp.com/api/forum/' + editQuestion.id, editQuestion)
      .then((response) => {
        getQuestions()
      })
    }


  const handleDeleteQuestion = (event) => {
    axios
      .delete('https://japanresources.herokuapp.com/api/forum/' + event.target.value)
      .then((response) => {
        getQuestions()
        })
      }

  useEffect(() => {
   getQuestions()
  }, [])

  return (
    <>
      <h1>Life in Japan: Resource Center</h1>

      <div className="questions">
        {questions.map((question) => {
          return (
            <div className="question" key={question.id}>
            <h4>Name: {question.name}</h4>
            <h5>Question/Comment: {question.question}</h5>
            <EditQuestion handleUpdateQuestion={handleUpdateQuestion} id={question.id} />
            <br/>
            <button onClick={handleDeleteQuestion} value={question.id}> Delete Question</button>
            </div>
             )
         })}
      </div>
          <br/>
      <AddQuestion handleCreate={handleCreateQuestion} />
    </>
  )
}

export default Forum
