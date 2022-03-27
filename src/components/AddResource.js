import React, { useState, useEffect } from 'react'

const AddResource = (props) => {
  let emptyResource = { topic: '', category: '', subcategory: '', URL: '', description: '', }
  const [resource, setResource] = useState(emptyResource)


  const handleChange = (event) => {
    setResource({ ...resource, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(resource)
  }

  return (
    <>
    <details>
    <summary>Click Here to Add a Resource Under Category: {resource.subcategory}, Subcategory:{resource.subcategory} </summary>
      <form onSubmit={handleSubmit}>
        <h4><em>Keep in mind this site is for information purposes only, so please try to share mainly fact-based resources.</em></h4>
        <label htmlFor="topic">Topic:</label>
        <input type="text" name="topic" value={resource.topic} onChange={handleChange} />
         <br />
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" value={resource.category} onChange={handleChange} />
          <br />
        <label htmlFor="subcategory">Subcategory:</label>
        <input type="text" name="subcategory" value={resource.subcategory} onChange={handleChange} />
          <br />
        <label htmlFor="url">Link/URL:</label>
        <input type="text" name="url" value={resource.URL} onChange={handleChange} />
          <br />
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" value={resource.description} onChange={handleChange} />
          <br />
        <input type="submit"/>
      </form>
      </details>
    </>
  )
}

export default AddResource
