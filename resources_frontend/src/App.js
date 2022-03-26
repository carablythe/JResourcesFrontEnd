import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddQuestion from './components/AddQuestion'
import EditQuestion from './components/EditQuestion'
import AddResource from './components/AddResource'
import EditResource from './components/EditResource'


const App = () => {
  const [resources, setResources] = useState([])
  const [questions, setQuestions] = useState([])


  const getResources = () => {
    axios
      .get('https://japanresources.herokuapp.com/api/resources')
      .then(
        (response) => setResources(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    }

  const getQuestions = () => {
    axios
      .get('https://japanresources.herokuapp.com/api/forum')
      .then(
        (response) => setQuestions(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    }


  const handleCreateResource = (addResource) => {
    axios
      .post('https://japanresources.herokuapp.com/api/resources', addResource)
      .then((response) => {
        console.log(response)
        getResources()
       })
    }

  const handleCreateQuestion = (addQuestion) => {
    axios
      .post('https://japanresources.herokuapp.com/api/forum', addQuestion)
      .then((response) => {
        console.log(response)
        getQuestions()
      })
    }


  const handleUpdateResource = (editResource) => {
    console.log(editResource)
    axios
      .put('https://japanresources.herokuapp.com/api/resources/' + editResource.id, editResource)
      .then((response) => {
        getResources()
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


  const handleDeleteResource = (event) => {
    axios
      .delete('https://japanresources.herokuapp.com/api/resources/' + event.target.value)
      .then((response) => {
        getResources()
      })
    }

  const handleDeleteQuestion = (event) => {
    axios
      .delete('https://japanresources.herokuapp.com/api/forum/' + event.target.value)
      .then((response) => {
        getResources()
        })
      }


  useEffect(() => {
   getResources()
   }, [])

  useEffect(() => {
   getQuestions()
  }, [])

  return (
    <>
      <h1>Life in Japan: Resource Center</h1>

      <div className="resources">
        {resources.map((resource) => {
          return (
            <div className="resource" key={resource.id}>
            <h4>Topic: {resource.topic}</h4>
            <h5>Category: {resource.category}</h5>
            <h5>Subcategory: {resource.subcategory}</h5>
            <h5>Link/URL: {resource.URL}</h5>
            <h5>Description: {resource.description}</h5>
            </div>
             )
         })}
      </div>
      <AddResource handleCreate={handleCreateResource} />

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

export default App
