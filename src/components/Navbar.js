import {useState} from 'react'
import { useParams } from 'react-router'

const Navbar = () => {
  const [revealNav, setRevealNav] = useState(false)
  const [query, setQuery] = useState(""); useParams("")

  return (
      <>
        <aside>
          <ul className= "navbar">
              <li className="navList">Search Topic:
              <input placeholder="Enter Query" className="searchBar"
                        onChange={event => setQuery(event.target.value)} />
              </li>
              <li className="navList"><a href= "./forum.js">Questions? Comments?</a>
              </li>
              <li className="navList"><a href= "./about.js">About the Site Administrator</a>
              </li>
              <li class="navList"><a href="./contact.js">Contact Admin</a>
              </li>
          </ul>
        </aside>
      </>
    )
}

export default Navbar
