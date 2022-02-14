import React from 'react'
import styled from 'styled-components'

const SpinBar = () => {

    const Spinbar = styled.div`
        display: flex;
        justify-content: center;
        padding: 3.5rem;
    `

    return (
        <Spinbar>
            <div className="spinner-border"></div>
        </Spinbar>
    )
}
 
export default SpinBar