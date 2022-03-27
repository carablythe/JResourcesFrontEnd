import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import AddResource from '../components/AddResource'
import EditResource from '../components/EditResource'


const Home = () => {
  const [resources, setResources] = useState([])
  const [query, setQuery] = useState("")


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
        <div>
          <h2> Welcome! </h2>
          <p>As a long-term resident of Japan, I would like to share what I have learned through my ups and downs of living in this beatuiful country!  </p>
          <p>I hope the resources you find on this site are informative and allow for smoother transitions and ans easier time navigating through life here.</p>
          <p>-Cara</p>
        </div>

        <div className="navList">Search Topic:
        <input placeholder="Enter Query" className="searchBar"
                  onChange={event => setQuery(event.target.value)} />
        </div>

        <div className="resources">
          {resources.filter((resource) => {
              if (resource.topic.includes(query))   {
                  return resource;
                }
              else if (resource.topic.toLowerCase().includes(query.toLowerCase()))  {
                  return resource;
                }
              else if  (resource.category.includes(query))  {
                  return resource;
                }
              else if  (resource.category.toLowerCase().includes(query.toLowerCase()))  {
                  return resource;
                }
              else if  (resource.subcategory.includes(query))  {
                  return resource;
                }
              else if (resource.subcategory.toLowerCase().includes(query.toLowerCase()))
              {
                return resource;
              }
            }).map((resource => {
          return (
            <div className="resource" key={resource.id}>
            <h4>Topic: {resource.topic}</h4>
            <h5>Category: {resource.category}</h5>
            <h5>Subcategory: {resource.subcategory}</h5>
            <h5>Link/URL: {resource.URL}</h5>
            <h5>Description: {resource.description}</h5>
            </div>
             )
          }))}
        </div>
          <AddResource handleCreate={handleCreateResource} />

    </>
  )
}

export default Home

// might not use:
//
// .map((resource => {
// return (
//   <div className="resource" key={resource.id}>
//   <h4>Topic: {resource.topic}</h4>
//   <h5>Category: {resource.category}</h5>
//   <h5>Subcategory: {resource.subcategory}</h5>
//   <h5>Link/URL: {resource.URL}</h5>
//   <h5>Description: {resource.description}</h5>
//   </div>
//    )
// }))
