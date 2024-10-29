import React from 'react'
import image from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <header id='header'>
        <img src={image} alt='logo'/>
        <h1>Investment Calculater</h1>
    </header>
  )
}
