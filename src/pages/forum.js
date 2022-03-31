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
     <aside className = "forum">
      <div className="questions">
        <h3>Questions? Comments? Post them here:</h3>
        {questions.map((question) => {
          return (
            <div className="question" key={question.id}>
            <h4>Name: </h4>
            <p className= "posting"> {question.name}</p>
            <h4>Question/Comment:</h4>
            <p className= "posting">{question.question}</p>
            <EditQuestion handleUpdateQuestion={handleUpdateQuestion} id={question.id} />
            <button onClick={handleDeleteQuestion} value={question.id}> Delete Your Question</button>
            </div>
             )
         })}
      </div>
        ----------------------------
          <br/>
      <AddQuestion handleCreate={handleCreateQuestion} />
      </aside>
    </>
  )
}

export default Forum
