import React from 'react'


const Contact = () => {


  return (
    <>
    <div>
        <form>
            <h4>Send Cara a Message:</h4>
            <input type='text' placeholder='Your name'/>
            <br/>
            <input type='email' placeholder='Your email address'/>
            <br/>
            <input type='text' placeholder='Message subject'/>
            <br/>
            <textarea placeholder='Please write your message here.'></textarea>
            <br/>
            <button className='submit'>Send Message</button>
        </form>
    </div>
    </>
  )
}

export default Contact
