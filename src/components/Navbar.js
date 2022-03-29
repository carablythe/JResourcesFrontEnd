import React from 'react'

const Navbar = (props) => {


  return (
      <>
        <aside>
              <ul className= "navbar">
              <li className="navList"><a href= "../pages/forum.js">Questions? Comments?</a>
              </li>
              <li className="navList"><a href= "..:pages/about.js">About the Site Administrator</a>
              </li>
              <li class="navList"><a href="../pages/contact.js">Contact Admin</a>
              </li>
              <li class="navList"><a href="https://www.google.com/">Safe Exit</a> What's this?
              </li>
          </ul>
        </aside>
      </>
    )
}

export default Navbar
