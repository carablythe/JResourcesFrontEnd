import React from 'react'

const Directory = () => {
    // const [revealNav, setRevealNav] = useState(false)


    return (
        <>
          <aside>
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
