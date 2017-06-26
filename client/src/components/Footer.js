import React from 'react'
import HomeIcon from './HomeIcon'
import '../css/Footer.css'

const Footer = () => (
  <div className="footer">
    <HomeIcon  active={true} />
    <HomeIcon  active={false} />
  </div>
)

export default Footer
