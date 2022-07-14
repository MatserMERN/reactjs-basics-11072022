import React from 'react'

function Child(props) {
    const {callParent} = props
  return (
    <div>
        <h1>Call Parent from Child</h1>
        <button className="btn btn-primary"
                onClick={() => callParent('child')}
        >Call Parent</button>
    </div>
  )
}

export default Child