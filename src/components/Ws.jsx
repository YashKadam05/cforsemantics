import React from 'react'
import './ws.css'

import blob1 from './Images/blob1.png'
import blob2 from './Images/blob2.png'
import blob3 from './Images/blob3.png'
import blob4 from './Images/blob4.png'
import blob5 from './Images/blob5.png'

export default function Ws() {
    return (
        <>


            <div className="w" id="w1">
                <img src={blob1} alt="" />
                <div className="winfo">
                    <h1>What was the problem?</h1>
                    <p>Unable to recall the statements, syntax, arguments, parameters.</p>
                </div>
            </div>

            <div className="w" id="w2">
                <div className="winfo">
                    <h1>Who faced the problem?</h1>
                    <p>Students, Developers,</p>
                    <p>Freelancers, Office Workers.</p>
                </div>
                <img src={blob3} alt="" />
            </div>

            <div className="w" id="w1">
                <img src={blob5} alt="" />
                <div className="winfo">
                    <h1>When was the problem?</h1>
                    <p>During Coding, Exams, Pressurised Env, Closer Deadline.</p>
                </div>
            </div>

            <div className="w" id="w2">
                <div className="winfo">
                    <h1>Where was the problem?</h1>
                    <p>Labs, Office, Home.</p>
                </div>
                <img src={blob2} alt="" />
            </div>

            <div className="w" id="w1">
                <img src={blob4} alt="" style={{ paddingRight: "20px" }} />
                <div className="winfo">
                    <h1>Why was the problem?</h1>
                    <p style={{ textAlign: "left" }}>Due to Lot of Statements/Lines.</p>
                    <p style={{ textAlign: "left" }}>Used Internet but still unable to understand.</p>
                    <p style={{ textAlign: "left" }}>Can't watch long 1 shot videos or huge playlist on YT as it will take more time.</p>
                    <p style={{ textAlign: "left" }}>Incorrect Syntax/Arguments/Parameters/Typos can cause an Error.</p>
                    <p style={{ textAlign: "left" }}>Tough manage bunch of Paper Notes or Bunch of CodeImages for understandings.
                    </p>
                </div>
            </div>

        </>
    )
}
