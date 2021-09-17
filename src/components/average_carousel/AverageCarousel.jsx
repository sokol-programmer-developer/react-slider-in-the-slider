import React, {useEffect, useState} from "react";
import "./AverageCarousel.css"


const AverageCarousel = (props) => {

    const{children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length)
    },[children]);

    useEffect(() => {
        // other code
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex === children.length-1 ? 0 : currentIndex + 1);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, 5000);
        return () => clearInterval(interval);
    }, [ currentIndex]);

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState +1 )
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex (prevState => prevState -1 )
        }
    };
    return (
        <>
            <div className="average_carousel_container">
                <div className="average_carousel_wrapper">
                    <div className="average_carousel_arrow">


                        {
                            currentIndex > 0 &&
                            <button onClick={prev} className="average_carousel_left-arrow bn1">
                                &lt;
                            </button>
                        }

                        {
                            currentIndex < (length - show) &&
                            <button onClick={next} className="average_carousel_right-arrow bn2">
                                &gt;
                            </button>
                        }


                    </div>

                    <div className="average_carousel_content_wrapper">
                        <div className={`average_carousel_content show-${show}`}
                        style = {{transform: `translateX(-${currentIndex * (100 / show)}vw)`}}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AverageCarousel;

