import React from 'react'
import './Style.css'

class Xyz extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <div className="container2 containerSame">
           <h2>This is Created Using Class Component</h2>
           <p>This is done using external CSS</p>
           <p>This is done using Internal CSS</p>
           </div>
            </>
        )
    }
}

export default Xyz