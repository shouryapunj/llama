import React , {Component} from 'react'
// import BottomCards from './BottomCards'
import '../Css/Main.css'

class Main extends Component {

    render() {

        return(

            <div>
                {/* <img src={require('../Images/llama-icon-1.jpg')} id="llama-icon-1" alt="llama-icon-1" style={{width: '10%', marginLeft: '0px', marginTop: '0px', borderRadius: '50%' }} /> */}
                <div className="container-fluid">
                <img src={require('../Images/llama-icon-1.jpg')} id="llama-icon-1" alt="llama-icon-1" style={{width: '10%', height: '20%', position: 'absolute', top: '40px', borderRadius: '10%' }} />
                <p style={{marginTop: "90px", marginLeft: "200px", fontFamily: "Verdana" }}>
                    I am the Majestic llama. Explore the page for some fun stuffs.
                </p>
                </div>
                
                {/* <img src={require('../Images/llama-icon-2.jpg')} id="llama-icon-2" alt="llama-icon-2" style={{objectFit: 'cover', width: '10%', position: 'absolute', top: '200px', borderRadius: '10%' }} /> */}
                <img src={require('../Images/main-llama.jpg')} id="main-llama" alt="main-llama" style={{ }} />

                <div style={{position: "absolute", left: "900px", top :"150px", fontFamily: "Verdana"}}>
                    {/* <BottomCards /> */}
                    <img src={require('../Images/llama-icon-2.jpg')} id="llama-icon-2" alt="llama-icon-2" style={{ borderRadius: '10%', width: "15%" }} />&nbsp;
                    <img src={require('../Images/llama-icon-2.jpg')} id="llama-icon-2" alt="llama-icon-2" style={{ borderRadius: '10%', width: "15%" }} />&nbsp;
                    <img src={require('../Images/llama-icon-2.jpg')} id="llama-icon-2" alt="llama-icon-2" style={{ borderRadius: '10%', width: "15%" }} />&nbsp;
                    <img src={require('../Images/llama-icon-2.jpg')} id="llama-icon-2" alt="llama-icon-2" style={{ borderRadius: '10%', width: "15%" }} />&nbsp;

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={require('../Images/llama-icon-2.jpg')} id="llama-icon-2" alt="llama-icon-2" style={{ borderRadius: '10%' }} />
                            </div>
                            <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                            </div>
                        </div>
                    </div> 
                    
                </div>
                
                
            </div>
        )
    }

}

export default Main