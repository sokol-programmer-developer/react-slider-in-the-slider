import React from "react";

const AverageSliderArrows = ({prevSlide, nextSlide}) => {
    return (
        <>
            <div className="average_arrows">
                <span className="average_next" onClick={nextSlide}>&#10095;</span>
                <span className="average_prev" onClick={prevSlide}>&#10094;</span>
            </div>
        </>
    );
};

export default AverageSliderArrows;
