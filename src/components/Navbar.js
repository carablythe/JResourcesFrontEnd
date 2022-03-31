import React, {useState} from 'react'
import Popup from './Popup'

const Navbar = () => {

  const [buttonPopup, setButtonPopup] = useState(false);


  return (
      <>
        <h1>Life in Japan: Resource Center</h1>
        <div>
              <ul className= "navbar">
              <li className="navList"><a href= "/">Homepage</a>
              </li>
              <li className="navList"><a href= "../pages/forum">Questions? Comments?</a>
              </li>
              <li class="navList"><a href="../pages/contact">Contact Admin</a>
              </li>
              <li class="navList"><a href="https://www.google.com/">Safe Exit </a>
              <button className='safeExitExplanation' onClick={() => setButtonPopup(true)} > What's this? </button>
                    <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
                      <h3>What is <em>Safe Exit</em>?</h3> <h5>Given the sensitive nature of some of the information provided on this site, if you are in a situation where you need to quickly leave this page for fear of someone seeing what you are reading, please click "Safe Exit". Make sure to also clear your browser history/data each time you are finished collecting information and to save useful information in a password-protected folder, drive or email account as soon as possible.</h5>
                    </Popup>
              </li>
          </ul>
        </div>
      </>
    )
}

export default Navbar
