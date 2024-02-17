/* eslint-disable import/no-anonymous-default-export */
import './header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>