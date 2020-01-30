import React, {Component} from 'react'
import '../Css/Bootstrap4.css'

class TopNav extends Component {

    render() {
        return(
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <span className="navbar-brand" style={{ color: 'whitesmoke' }}>
                    
                    &nbsp;&nbsp;The Llama
                </span>
                <span>
                    <a href="https://en.wikipedia.org/wiki/Llama" style={{ color: 'white' }}><button className="btn btn-dark">Wiki</button></a>
                </span>

            </nav>
        )
    }

}

export default TopNav