import React from 'react'

// const Hello = () => {
//     return (
//     <div id="main" className="header">
//         <h1 id="head" className="header-one">Hello Scott</h1>
//     </div>
//   )
// }

const Hello = () => {
    return React.createElement('div', 
                                {id: "main", className: "header"}, 
                                React.createElement('h1', 
                                                      {id: "head", className: "header-one"},
                                                     'Hello Scott'))
}

export default Hello