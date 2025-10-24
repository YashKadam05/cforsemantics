import React from 'react'
import './benefits.css'

export default function Benefits() {
    return (
        <>
            <div className="bdBody">

                <div className="bd">
                    <div className="benef">
                        <h1>Benefits</h1>
                        <p>1. Uses Official Docs.</p>
                        <p>2. Userfriendly GUI.</p>
                        <p>3. Can keep screenshots for notes/projects.</p>
                        <p>4. Simple, Short & Easy to use.</p>
                    </div>

                    <div className="sep"></div>

                    <div className="drawb">
                        <h1>Drawbacks</h1>
                        <p>1. User should paste complete line.</p>
                        <p>2. Line should be correct and error free.</p>
                        <p>3. Can cause Ambiguity between Languages.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
