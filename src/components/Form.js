import Results from '../components/Results';
import React, { useState } from 'react';


const Form = (props) => {
    const [color, setColor] = useState("");
    const [all_colors, setAll_colors] = useState([]);
    const [box_size, setBox_size] = useState(100);

    const handleColor = e => {
        setColor(e.target.value);
    }

    const handleBoxSize = e => {
        setBox_size(e.target.value);
    }

    const handleSubmit = e => {
        //first prevent default as React wants to submit the form/send it somewhere
        e.preventDefault();
        const newColor = {
            color: color,
            box_size: box_size
        };

        //call setAll_colors to update all_colors variable to add our new color. setAll_colors needs to be passed a BRAND NEW array of colors
        setAll_colors([...all_colors, newColor]); //use spread to add all existing colors plus the new color

        console.log(newColor.color);
        //to clear the input box after submission, we need to set the input box to an empty string
        setColor('');
        setBox_size(100);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="color" className="color">Color </label>
                    <input type="text" onChange={handleColor} value={color} />
                </div>
                <div className="container">
                    <label htmlFor="box_size" className="boxSize">Box Size </label>
                    <input type="text" onChange={handleBoxSize} value={box_size} />
                </div>
                <input type="submit" value="Add" />
            </form>
            <Results all_colors={all_colors} />
        </div>
    );
}

export default Form;
