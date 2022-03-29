import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddResource from '../components/AddResource'
import Directory from '../components/Directory'
// import EditResource from '../components/EditResource'


const Home = (props) => {
  const [resources, setResources] = useState([])
  const [query, setQuery] = useState([])

  const handleQuery = (event) => {
    const queryWord = event.target.value
    const newQuery = resources.filter((resource) => {
      if (resource.topic.includes(queryWord))
      {
        return resource;
      }
      else if (resource.topic.toLowerCase().includes(queryWord.toLowerCase()))
      {
        return resource;
      }
      else if  (resource.category.includes(queryWord))
      {
        return resource;
      }
      else if  (resource.category.toLowerCase().includes(queryWord.toLowerCase()))
      {
        return resource;
      }
      else if  (resource.subcategory.includes(queryWord))
      {
        return resource;
      }
      else if (resource.subcategory.toLowerCase().includes(queryWord.toLowerCase()))
      {
      return resource;
      }
      else {return null}
    })
     setQuery(newQuery)
    }


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

  //
  // const handleUpdateResource = (editResource) => {
  //   console.log(editResource)
  //   axios
  //     .put('https://japanresources.herokuapp.com/api/resources/' + editResource.id, editResource)
  //     .then((response) => {
  //       getResources()
  //     })
  //   }
  //
  //
  // const handleDeleteResource = (event) => {
  //   axios
  //     .delete('https://japanresources.herokuapp.com/api/resources/' + event.target.value)
  //     .then((response) => {
  //       getResources()
  //     })
  //   }


  useEffect(() => {
   getResources()
   }, [])

  return (
    <>
      <h1>Life in Japan: Resource Center</h1>
        <div>
          <h2> Welcome! </h2>
          <p>As a long-term resident of Japan, I would like to share what I have learned through my ups and downs of living in this beautiful country!  </p>
          <p>I hope the resources you find on this site are informative and allow for smoother transitions and an easier time navigating through life here.</p>
          <p>-Cara</p>
        </div>
        <div className="search">Search Topic:
        <input placeholder="Enter Query..." className="searchBar"
              onChange={handleQuery} />
        </div>
        {query.length != 0 && (
        <div className="resources">
          {query.map((resource) => {
            return (
            <div className="resource" key={resource.id}>
            <h4>Topic: {resource.topic}</h4>
            <h5>Category: {resource.category}</h5>
            <h5>Subcategory: {resource.subcategory}</h5>
            <h5>Link/URL: {resource.URL}</h5>
            <h5>Description: {resource.description}</h5>
            <details>
            <summary>Click Here to Add a Resource Under Category: {resource.category}, Subcategory:{resource.subcategory} </summary>
           <AddResource handleCreate={handleCreateResource} />
            </details>
            </div>
           )
          })}
        </div>
      )}

    </>
  )
}

export default Home
