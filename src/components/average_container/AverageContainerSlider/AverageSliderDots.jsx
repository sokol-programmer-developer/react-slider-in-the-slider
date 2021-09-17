import React from "react";

const  AverageSliderDots = ({activeId, onClick, AverageImagesSlider}) => {
    return (
        <>
            <div className="average_all_dots">
                {AverageImagesSlider.map((slide, id) => (
                    <span
                    key={id}
                    className={`${activeId === id ? "average_dot average_active_dot" :" average_dot "}`}
                    onClick={() => onClick(id)}
                    >
                    <img className="average_slide_nano_images" src={slide.urls} alt=" dots images  "/>

                    </span>
                ))}
            </div>
        </>
    );
};

export default  AverageSliderDots;
