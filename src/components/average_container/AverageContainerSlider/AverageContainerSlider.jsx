import React, {useEffect, useState} from "react";
import AverageSliderContent from "./AverageSliderContent";
import AverageImagesSlider from "./AverageImagesSlider";
import AverageSliderArrows from "./AverageSliderArrows";
import AverageSliderDots from "./AverageSliderDots";
import "./AverageContainerSlider.css"


const ASlide = AverageImagesSlider.length-1;

const AverageContainerSlider = () => {

    const [activeId, setActiveId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId(activeId === ASlide ? 0 : activeId +1);
        },5000);
        return () => clearInterval(interval);
    },[activeId]);

    return (

        <>
            <div className="average_slider_container">
                <AverageSliderContent
                    activeId={activeId}
                    AverageImagesSlider={AverageImagesSlider}
                />
                <AverageSliderArrows

                    nextSlide = {() => setActiveId( activeId === ASlide ? 0 : activeId +1 )}
                    prevSlide = {() => setActiveId( activeId < 1 ? ASlide : activeId -1)}
                />

                <AverageSliderDots
                    activeId={activeId}
                    AverageImagesSlider={AverageImagesSlider}
                    onClick={(activeId) => setActiveId (activeId)}
                />
            </div>
        </>
    );
};

export default AverageContainerSlider;

