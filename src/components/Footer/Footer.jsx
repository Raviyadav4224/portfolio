import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
   <footer>
    <div>{new Date().getFullYear()} &copy; All Rights Reserved.</div>
    <div>Built with &#9829; by Ravi Kumar</div>
    <div>Thanks for visiting</div>
   </footer>
  )
}

export default Footer