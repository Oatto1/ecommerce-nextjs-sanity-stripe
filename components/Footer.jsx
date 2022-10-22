import React from 'react'
import {  AiFillBehanceSquare, AiFillGithub} from 'react-icons/ai';
import { GoPerson } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Oatto Shop All rights reserverd</p>
      <p className="icons">
        <AiFillBehanceSquare/>
        <AiFillGithub/>
        <GoPerson/>
        
      </p>
    </div>
  )
}

export default Footer