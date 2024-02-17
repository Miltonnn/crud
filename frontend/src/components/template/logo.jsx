/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line no-unused-vars
import './logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default () =>
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>