import React from "react";
import "./AverageSlider.css";

import AverageCarousel from "../average_carousel/AverageCarousel";
import AverageContainer from "../average_container/AverageContainer";

const AverageSlider =  () => {

    return (
        <>
            <div className="average_SliderSection">
                <AverageCarousel

                    show={1}
                    className="average_SliderSubsection"
                >


                    <div className="average_SliderPartition" >
                         < AverageContainer />
                    </div>

                    <div className="average_SliderPartition" >
                        < AverageContainer />
                    </div>

                    <div className="average_SliderPartition" >
                        < AverageContainer />
                    </div>

                    <div className="average_SliderPartition" >
                        < AverageContainer />
                    </div>

                    <div className="average_SliderPartition" >
                        < AverageContainer />
                    </div>




                </AverageCarousel>
            </div>
        </>
    );
};

export default AverageSlider;

