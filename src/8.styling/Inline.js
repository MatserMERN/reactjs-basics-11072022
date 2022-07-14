import React from 'react'

function Inline() {
    const heading = { fontSize: '72px',color: "blue"}
  return (
    <div>
        <h1 style={heading}>Inline Styling</h1>

        <h1 style={{fontSize: '72px', color: "greenyellow"}}>Other Inline Styling</h1>
    </div>
  )
}

export default Inline