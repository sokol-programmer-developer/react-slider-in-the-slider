import React from "react";
import "./AverageContainer.css"
import AverageContainerSlider from "./AverageContainerSlider/AverageContainerSlider";

const AverageContainer = () => {

    return (
        <>
            <div className="averageContainer">
                <AverageContainerSlider />
                <AverageContainerSlider />
            </div>
        </>
    );
};

export default  AverageContainer;

