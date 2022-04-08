import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './styles.css';

export const Header = () => {

const goTo = useNavigate()

const goBack = () => goTo(-1)

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="discography">Discography</NavLink>
      <NavLink to="AboutUs">About Us</NavLink>
      <NavLink to="Contact">Contact</NavLink>
      <button onClick={goBack}>Back</button>
    </nav>
  )
}
