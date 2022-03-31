import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Directory = () => {
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


    useEffect(() => {
     getResources()
     }, [])

    return (
      <>
      <aside>
        <h3>Resource Directory:</h3>
          <div className='directoryMenu'>
            <details className="dropdown" >
              <summary className="resourceCategory"><b>Immigration</b></summary>
                <div className="resourceDiv">
                  {resources.filter((resource, index) => {
                  if (resource.category.includes('Immigration')) {
                  return resource;
                  }
                  else {return null}
                  }).map((resource, index) => {
                  return (
                   <ul className="dropDownSubcategory" >
                    <details>
                     <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                      <li className="resourceItself">
                        <ul className="resourceUL" >
                           <li className="resourceLI" >
                           <em>Topic:</em> {resource.topic}
                           <br/>
                          <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a>
                           <br/>
                           <em>Description:</em> {resource.description}
                           </li>
                        </ul>
                      </li>
                    </details>
                  </ul>
                  )
                })}
             </div>
          </details>
          <details className="dropdown" >
              <summary className="resourceCategory"><b>Employment</b></summary>
                 <div className="resourceDiv">
                     {resources.filter((resource, index) => {
                      if (resource.category.includes('Employ')) {
                      return resource;
                      }
                      else {return null}
                      }).map((resource, index) => {
                      return (
                        <ul className="dropDownSubcategory" >
                         <details>
                          <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                              <li className="resourceItself">
                                <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                   <em>Topic:</em> {resource.topic}
                                   <br/>
                                  <a href= {resource.URL} target="_blank"
                                  rel="noreferrer">
                                  <em>Visit this Link/URL</em></a>
                                   <br/>
                                   <em>Description:</em> {resource.description}
                                   </li>
                                </ul>
                              </li>
                         </details>
                        </ul>
                        )
                       }
                     )}
                 </div>
            </details>
            <details className="dropdown" >
                    <summary className="resourceCategory"><b>Housing</b></summary>
                        <div className="resourceDiv">
                             {resources.filter((resource, index) => {
                              if (resource.category.includes('Housing')) {
                              return resource;
                              }
                              else {return null}
                              }).map((resource, index) => {
                              return (
                                <ul className="dropDownSubcategory" >
                                 <details>
                                  <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                                      <li className="resourceItself">
                                        <ul className="resourceUL" >
                                           <li className="resourceLI" >
                                           <em>Topic:</em> {resource.topic}
                                           <br/>
                                          <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a>
                                           <br/>
                                           <em>Description:</em> {resource.description}
                                           </li>
                                        </ul>
                                      </li>
                                  </details>
                                </ul>
                                )
                              })}
                        </div>
             </details>
             <details className="dropdown" >
                     <summary className="resourceCategory"><b>Taxes</b></summary>
                         <div className="resourceDiv">
                              {resources.filter((resource, index) => {
                               if (resource.category.includes('Tax')) {
                               return resource;
                               }
                              else {return null}
                               }).map((resource, index) => {
                               return (
                                 <ul className="dropDownSubcategory" >
                                  <details>
                                   <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                                       <li className="resourceItself">
                                         <ul className="resourceUL" >
                                            <li className="resourceLI" >
                                            <em>Topic:</em> {resource.topic}
                                            <br/>
                                           <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a>
                                            <br/>
                                            <em>Description:</em> {resource.description}
                                            </li>
                                         </ul>
                                       </li>
                                   </details>
                                 </ul>
                                 )
                               })}
                         </div>
              </details>
              <details className="dropdown" >
                      <summary className="resourceCategory"><b>Medical Care</b></summary>
                          <div className="resourceDiv">
                               {resources.filter((resource, index) => {
                                if (resource.category.includes('Medical')) {
                                return resource;
                                }
                                else {return null}
                                }).map((resource, index) => {
                                return (
                                  <ul className="dropDownSubcategory" >
                                   <details>
                                    <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                                        <li className="resourceItself">
                                          <ul className="resourceUL" >
                                             <li className="resourceLI" >
                                             <em>Topic:</em> {resource.topic}
                                             <br/>
                                            <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a>
                                             <br/>
                                             <em>Description:</em> {resource.description}
                                             </li>
                                          </ul>
                                        </li>
                                    </details>
                                  </ul>
                                  )
                                })}
                          </div>
               </details>
               <details className="dropdown" >
                       <summary className="resourceCategory"><b>Legal Matters</b></summary>
                           <div className="resourceDiv">
                                {resources.filter((resource, index) => {
                                 if (resource.category.includes('Legal')) {
                                 return resource;
                                 }
                                  else {return null}
                                 }).map((resource, index) => {
                                 return (
                                   <ul className="dropDownSubcategory" >
                                    <details>
                                     <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                                         <li className="resourceItself">
                                           <ul className="resourceUL" >
                                              <li className="resourceLI" >
                                              <em>Topic:</em> {resource.topic}
                                              <br/>
                                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit    this Link/URL</em></a>
                                              <br/>
                                              <em>Description:</em> {resource.description}
                                              </li>
                                           </ul>
                                         </li>
                                     </details>
                                   </ul>
                                   )
                                 })}
                           </div>
                </details>
                <details className="dropdown" >
                        <summary className="resourceCategory"><b>Childcare</b></summary>
                            <div className="resourceDiv">
                                 {resources.filter((resource, index) => {
                                  if (resource.category.includes('Child')) {
                                  return resource;
                                  }
                                  else {return null}
                                  }).map((resource, index) => {
                                  return (
                                    <ul className="dropDownSubcategory" >
                                     <details>
                                      <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                                          <li className="resourceItself">
                                            <ul className="resourceUL" >
                                               <li className="resourceLI" >
                                               <em>Topic:</em> {resource.topic}
                                               <br/>
                                              <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit    this Link/URL</em></a>
                                               <br/>
                                               <em>Description:</em> {resource.description}
                                               </li>
                                            </ul>
                                          </li>
                                      </details>
                                    </ul>
                                    )
                                  })}
                            </div>
                 </details>
                 <details className="dropdown" >
                         <summary className="resourceCategory"><b>School System</b></summary>
                             <div className="resourceDiv">
                                  {resources.filter((resource, index) => {
                                   if (resource.category.includes('School')) {
                                   return resource;
                                   }
                                  else {return null}
                                   }).map((resource, index) => {
                                   return (
                                     <ul className="dropDownSubcategory" >
                                      <details>
                                       <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                                           <li className="resourceItself">
                                             <ul className="resourceUL" >
                                                <li className="resourceLI" >
                                                <em>Topic:</em> {resource.topic}
                                                <br/>
                                               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a>
                                                <br/>
                                                <em>Description:</em> {resource.description}
                                                </li>
                                             </ul>
                                           </li>
                                       </details>
                                     </ul>
                                     )
                                   })}
                             </div>
                  </details>
                  <details className="dropdown" >
                          <summary className="resourceCategory"><b>Translation & Language Services</b></summary>
                              <div className="resourceDiv">
                                   {resources.filter((resource, index) => {
                                    if (resource.category.includes('Translation')) {
                                    return resource;
                                    }
                                    else if (resource.category.includes('Language'))
                                    {
                                    return resource;
                                    }
                                    else {return null}
                                    }).map((resource, index) => {
                                    return (
                                      <ul className="dropDownSubcategory" >
                                       <details>
                                        <summary className="resourceSubcategory" key={resource.id}> {resource.subcategory} </summary>
                                            <li className="resourceItself">
                                              <ul className="resourceUL" >
                                                 <li className="resourceLI" >
                                                 <em>Topic:</em> {resource.topic}
                                                 <br/>
                                                <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a>
                                                 <br/>
                                                 <em>Description:</em> {resource.description}
                                                 </li>
                                              </ul>
                                            </li>
                                        </details>
                                      </ul>
                                      )
                                    })}
                              </div>
                   </details>
           </div>
       </aside>
     </>
    )
}

export default Directory


// <div className="search">Search Topic:
// <input placeholder="Enter Query..." className="searchBar"
//       onClick={handleQuery} />
// </div>
// {query.length != 0 && (
// <div className="resources">
//   {query.map((resource) => {
//     return (
//     <div className="resource" key={resource.id}>
//     <h4>Topic: {resource.topic}</h4>
//     <h5>Category: {resource.category}</h5>
//     <h5>Subcategory: {resource.subcategory}</h5>
//     <h5>Link/URL: {resource.URL}</h5>
//     <h5>Description: {resource.description}</h5>
//     <details>
//     <summary>Click Here to Add a Resource Under Category: {resource.category}, Subcategory:{resource.subcategory} </summary>
//    <AddResource handleCreate={handleCreateResource} />
//     </details>
//     </div>
//    )
//   })}
// </div>
// )}


//
// Using?
//
// <aside>
//     <div className='directoryMenu'>
//             <details className="dropdown" >
//               <summary className="resourceCategory" onClick = {() => showImmigration()}> Immigration </summary>
//                 <div className="resourceDiv">
//                 {showImmigration ? (
//                <>
//                 {resources.filter((resource, index) => {
//                  if (resource.category.includes('Immigration')) {
//                    return resource;
//                    }
//                   }).map((resource, index) => {
//                    return (
//                      <ul className="dropDownSubcategory" key={resource.id}>
//                        <li className="resourceSubcategory"> {resource.subcategory}
//                          <ul className="dropDownResource">
//                            <li className="resourceItself">
//                            Topic: {resource.topic}
//                            Link/URL: {resource.URL}
//                            Description: {resource.description}
//                            </li>
//                          </ul>
//                        </li>
//                      </ul>
//                    )
//                  }
//                )}
//               </>
//               ): null
//              }
//            </div>
//         </details>
//      </div>
//  </aside>




// maybe not using:
//
//
// <ul className="dropdown">
//   <li className="navBar drop">Immigration
//     <ul className="dropUl">
//        <li className="dropLi">Visa Type:</li>
//          <ul className="dropUlUl">
//            {resources.filter((resource, index) => {
//              if (resource.subcategory.includes('Work')) {
//                return resource;
//                } else if (
//                resource.category.includes('work')
//                ){
//                return resource;
//                }
//                }).map((resource, index) => {
//                return (
//                   <li className="dropLiLi">Work</li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//
//
//                   <li className="dropLiLi">Student</li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//                   <li className="dropLiLi">Spousal</li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//                   <li className="dropLiLi"> Investor</li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//                   <li className="dropLiLi"> Highly Skilled Worker</li>
//                 </ul>
//               <li className="dropLi"> Permanent Residency  </li>
//               <li className="dropLi"> Other Info  </li>
//             </ul>
//           </li>
//           <li className="navBar drop">Employment
//             <ul className="dropUl">
//               <li className="dropLi"> Visa Sponsorship  </li>
//               Topic: {resource.topic}
//               Link/URL: {resource.URL}
//               Description: {resource.description}
//               <li className="dropLi"> Work Culture  </li>
//               Topic: {resource.topic}
//               Link/URL: {resource.URL}
//               Description: {resource.description}
//               <li className="dropLi"> Part-time Work  </li>
//               Topic: {resource.topic}
//               Link/URL: {resource.URL}
//               Description: {resource.description}
//               <li className="dropLi"> Full-time Work  </li>
//               Topic: {resource.topic}
//               Link/URL: {resource.URL}
//               Description: {resource.description}
//               <li className="dropLi"> Other Info  </li>
//             </ul>
//           </li>
//           <li className="navBar drop">Taxes
//             <ul className="dropUl">
//               <li className="dropLi">Type:</li>
//                 <ul className="dropUlUl">
//                   <li className="dropLiLi"> Income  </li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//                   <li className="dropLiLi"> Residential  </li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//                   <li className="dropLiLi"> Property  </li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//                   <li className="dropLiLi"> Sales  </li>
//                   Topic: {resource.topic}
//                   Link/URL: {resource.URL}
//                   Description: {resource.description}
//                 </ul>
//               <li className="dropLi"> Nenkin System  </li>
//                  Topic: {resource.topic}
//                  Link/URL: {resource.URL}
//                  Description: {resource.description}
//               <li className="dropLi">Other Info  </li>
//                  Topic: {resource.topic}
//                  Link/URL: {resource.URL}
//                  Description: {resource.description}
//             </ul>
//           </li>
//       </ul>
//    </li>
//  </ul>
// </aside>
// </>
