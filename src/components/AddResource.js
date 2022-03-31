import React, { useState } from 'react'

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
    <summary class = "clickHere"><b>Click Here to Add a Resource to this Site</b></summary>
      <h5><em>Keep in mind this site is for information purposes only, so please try to share mainly fact-based resources.</em></h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="topic">Topic:</label>
          <input type="text" name="topic" value={resource.topic} onChange={handleChange} />
            <br />
        <label htmlFor="category">Category:</label>
          <select className = "option" name="category" value={resource.category} onChange={handleChange}>
            <option className = "option">Immigration</option>
            <option className = "option">Employment</option>
            <option className = "option">Housing</option>
            <option className = "option">Taxes</option>
            <option className = "option">Medical Care</option>
            <option className = "option">Legal Matters</option>
            <option className = "option">Childcare</option>
            <option className = "option">School System</option>
            <option className = "option">Translation & Language Services</option>
          </select>
            <br />
        <label htmlFor="subcategory">Subcategory:</label>
          <input name="subcategory" value={resource.subcategory} onChange={handleChange}/>
            <br />
        <label htmlFor="URL">Link/URL:</label>
          <input type="text" name="URL" value={resource.URL} onChange={handleChange} />
            <br />
        <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={resource.description} onChange={handleChange} />
            <br />
        <input className = "submit" type="submit"/>
      </form>
     </details>
    </>
  )
}

export default AddResource
