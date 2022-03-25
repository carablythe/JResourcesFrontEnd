import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
let [resources, setResources] = useState([])

const getResources = () => {
 axios
   .get('https://japanresources.herokuapp.com/api/resources')
   .then(
     (response) => setResources(response.data),
     (err) => console.error(err)
   )
   .catch((error) => console.error(error))
}

useEffect(() => {
 getResources()
}, [])

  return (
    <>
      <h1>App</h1>

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
    </>
  )
}

export default App
