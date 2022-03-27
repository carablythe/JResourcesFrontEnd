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
                              <li className="dropLiLi"><a href="#">Work</a></li>
                              <li className="dropLiLi"><a href="#">Student</a></li>
                              <li className="dropLiLi"><a href="#">Spousal</a></li>
                              <li className="dropLiLi"><a href="#">Investor</a></li>
                              <li className="dropLiLi"><a href="#">Highly Skilled Worker</a></li>
                            </ul>
                          <li className="dropLi"><a href="#">Permanent Residency</a></li>
                          <li className="dropLi"><a href="#">Other Info</a></li>
                        </ul>
                      </li>
                      <li className="navBar drop">Employment
                        <ul className="dropUl">
                          <li className="dropLi"><a href="#">Visa Sponsorship</a></li>
                          <li className="dropLi"><a href="#">Work Culture</a></li>
                          <li className="dropLi"><a href="#">Part-time Work</a></li>
                          <li className="dropLi"><a href="#">Full-time Work</a></li>
                          <li className="dropLi"><a href="#">Other Info</a></li>
                        </ul>
                      </li>
                      <li className="navBar drop">Taxes
                        <ul className="dropUl">
                          <li className="dropLi">Type:</li>
                            <ul className="dropUlUl">
                              <li className="dropLiLi"><a href="#">Income</a></li>
                              <li className="dropLiLi"><a href="#">Residential</a></li>
                              <li className="dropLiLi"><a href="#">Property</a></li>
                              <li className="dropLiLi"><a href="#">Sales</a></li>
                            </ul>
                          <li className="dropLi"><a href="#">Nenkin System</a></li>
                          <li className="dropLi"><a href="#">Other Info</a></li>
                        </ul>
                      </li>

              </ul>
          </aside>
        </>
    )
}

export default Directory
