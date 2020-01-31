import React , {Component} from 'react'
import BottomCards from './BottomCards'
import '../Css/Main.css'

class Main extends Component {

    render() {

        return(

            <div>
                <div className="container-fluid">
                <img src={require('../Images/llama-icon-1.jpg')} id="llama-icon-1" alt="llama-icon-1" style={{width: '10%', height: '20%', position: 'absolute', top: '40px', borderRadius: '10%' }} />
                <p style={{marginTop: "90px", marginLeft: "200px", fontFamily: "Verdana" }}>
                    I am the Majestic llama!
                </p>
                </div>
                <img src={require('../Images/main-llama.jpg')} id="main-llama" alt="main-llama" style={{ }} />

                <div className="container" style={{position: "absolute", left: "680px", top :"150px", fontFamily: "Verdana"}}>
                    <BottomCards />
                    {/* The llama is a South American relative of the camel.Llamas appear to have originated from the central plains of North America about 40 million years ago. They migrated to South America about 3 million years ago. At the end of the last ice age between 10,000 and 12,000 llama’s became completely extinct in North America.
                    Today llamas live throughout the Americas, Europe and Australia as domesticated livestock.

They prefer mountainous terrain whether mountainous deserts or grasslands.

Llamas typically live for 15 to 25 years, with some individuals surviving 30 years or more.

The height of a full-grown, full-size llama is 1.7 to 1.8 meters (5.6 to 5.9 feet) tall at the top of the head, and can weigh between 130 and 200 kilograms (290 and 440 pounds).

Llama’s body is covered with wool which can be black, gray, white or brown, with variety of patterns.

They can be divided in two groups according to the length of their fur: short coated called Ccara, and the medium coated called Curaca.

Llamas do not have hooves but their feet have soft, leathery pads and two toes with toenails.

Llama has elongated face, large nostrils and long ears that are slightly curved inwardly characteristically known as “banana” shaped. */}
                </div>
                
                
            </div>
        )
    }

}

export default Main