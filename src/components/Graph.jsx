import React from 'react'
import './graph.css'
import cfsGraph from "./Images/cfsGraph.png"

export default function Graph() {
  return (
    <>
    <div className="howBody">
        <h1>How CForSemantics solves the problem!</h1>
        <div className="graph">
            <img src={cfsGraph} alt=""/>
        </div>
    </div>
    </>
  )
}
