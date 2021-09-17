import React from "react";


const AverageSliderContent = ({activeId, AverageImagesSlider}) => {
    return (
        <>
            <div className="average_section">
                {AverageImagesSlider.map((slide, id) => (
                    <div key={id} className={id === activeId ? "average_slides average_active" : "average_inactive"}>
                        <img  className="average_slide_images" src={slide.urls} alt="img"/>
                        <h2 className="average_slide_title">{slide.title}</h2>
                        <h2 className="average_slide_text">{slide.description}</h2>

                    </div>
                ))}
            </div>
        </>
    );
};

export default AverageSliderContent;
