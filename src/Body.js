import React from 'react'
import {useState} from 'react'
import './Style.css'
import Xyz from './Class'
import Abc from './Functional'


function Asdf(){
    const[var1, func1] = useState(false)

    return(
        <>
        <p className="functionalButton same" onClick={()=> func1(!var1)}>Functional Styling</p>
        {var1 ? <Abc /> : " "}
        </>
    )
}
export default Asdf


class Ayush extends React.Component{
    constructor(){
        super()
        this.state = {
            a: false,
        };
    }
    render(){
        return(
            <>
              <p className="classButton same" onClick={()=> this.setState({a : !this.state.a})} > Class Styling</p>
              {this.state.a ? <Xyz/> : " " }
            </>
        )
    }
}

export {Ayush}


