import React from 'react'

const Directory = () => {
    // repeat below for each subcategory and then question? it with the filter below
  const [showSubcategory, setShowSubcategory] = useState(false);



    return (
        <>
          <aside>
                              <div className='whichToShow'>
                                  { showSubcategory ? (
                                      <>
                                          {resources.filter((resource, index) => {
                                             if (resource.subcategory.includes('')) {
                                              return product;
                                            } else if (
                                              product.category.includes('')
                                            ){
                                              return product;
                                            }
                                            }).map((resource, index) => {
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
                                     ): null
                                   }
                             </div>


           <ul className="dropdown">
            <li className="navBar drop">Immigration
                <ul className="dropUl">
                         <li className="dropLi">Visa Type:</li>
                            <ul className="dropUlUl">
                              <li className="dropLiLi">Work</li>
                              <li className="dropLiLi">Student</li>
                              <li className="dropLiLi">Spousal</li>
                              <li className="dropLiLi"> Investor</li>
                              <li className="dropLiLi"> Highly Skilled Worker</li>
                            </ul>
                          <li className="dropLi"> Permanent Residency  </li>
                          <li className="dropLi"> Other Info  </li>
                        </ul>
                      </li>
                      <li className="navBar drop">Employment
                        <ul className="dropUl">
                          <li className="dropLi"> Visa Sponsorship  </li>
                          <li className="dropLi"> Work Culture  </li>
                          <li className="dropLi"> Part-time Work  </li>
                          <li className="dropLi"> Full-time Work  </li>
                          <li className="dropLi"> Other Info  </li>
                        </ul>
                      </li>
                      <li className="navBar drop">Taxes
                        <ul className="dropUl">
                          <li className="dropLi">Type:</li>
                            <ul className="dropUlUl">
                              <li className="dropLiLi"> Income  </li>
                              <li className="dropLiLi"> Residential  </li>
                              <li className="dropLiLi"> Property  </li>
                              <li className="dropLiLi"> Sales  </li>
                            </ul>
                          <li className="dropLi"> Nenkin System  </li>
                          <li className="dropLi">Other Info  </li>
                        </ul>
                      </li>
              </ul>
          </aside>
        </>
    )
}

export default Directory
