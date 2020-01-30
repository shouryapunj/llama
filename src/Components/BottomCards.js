import React,  {Component} from 'react'

const BottomCards = () => {
    return (
        <div className="row">
            <div class="col-sm-4">
                <div class="card img-fluid" style={{backgroundColor : 'whitesmoke'}}>
                    {/* <img src={require('../Images/llama-1.jpg')} alt='llama-1' /> */}
                    <div class="card-body">
                        <h5 class="card-title">Origin</h5>
                        <p class="card-text">The llama is a South American relative of the camel.Llamas appear to have originated from the central plains of North America about 40 million years ago. They migrated to South America about 3 million years ago. At the end of the last ice age between 10,000 and 12,000 llama’s became completely extinct in North America.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card" style={{backgroundColor : 'whitesmoke'}}>
                    <div class="card-body">
                        <h5 class="card-title">Current Habitat</h5>
                        <p class="card-text">Today llamas live throughout the Americas, Europe and Australia as domesticated livestock.

They prefer mountainous terrain whether mountainous deserts or grasslands.

Llamas typically live for 15 to 25 years, with some individuals surviving 30 years or more.

The height of a full-grown, full-size llama is 1.7 to 1.8 meters (5.6 to 5.9 feet) tall at the top of the head, and can weigh between 130 and 200 kilograms (290 and 440 pounds).

Llama’s body is covered with wool which can be black, gray, white or brown, with variety of patterns.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card" style={{backgroundColor : 'whitesmoke'}}>
                    <div class="card-body">
                        <h5 class="card-title">Types</h5>
                        <p class="card-text">They can be divided in two groups according to the length of their fur: short coated called Ccara, and the medium coated called Curaca.

Llamas do not have hooves but their feet have soft, leathery pads and two toes with toenails.

Llama has elongated face, large nostrils and long ears that are slightly curved inwardly characteristically known as “banana” shaped.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>

        </div>
    )
    
}

export default BottomCards