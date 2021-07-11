import React from 'react'

const Results = (props) => {
    //destructure props
    const { all_colors } = props;
    console.log("here they are", all_colors);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", }}>
            {/* rendering a single color block. use map to loop through all blocks on the main App.js  */}
            {
                all_colors.map((idx, i) => {
                    return (
                        <div key={i} style={{ width: idx.box_size + "px", height: idx.box_size + "px", border: "2px solid black ", margin: "20px", backgroundColor: idx.color }}>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Results;
