import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddResource from '../components/AddResource'
import EditResource from '../components/EditResource'


const ShowResource = () => {
  const [resources, setResources] = useState([])


  const getResources = () => {
    axios
      .get('https://japanresources.herokuapp.com/api/resources')
      .then(
        (response) => setResources(response.data),
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



  const handleUpdateResource = (editResource) => {
    console.log(editResource)
    axios
      .put('https://japanresources.herokuapp.com/api/resources/' + editResource.id, editResource)
      .then((response) => {
        getResources()
      })
    }


  const handleDeleteResource = (event) => {
    axios
      .delete('https://japanresources.herokuapp.com/api/resources/' + event.target.value)
      .then((response) => {
        getResources()
      })
    }



  useEffect(() => {
   getResources()
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

    </>
  )
}

export default ShowResource
