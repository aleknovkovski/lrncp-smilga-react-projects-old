import React, {useState} from 'react';


const Tour = (props) => {
    const fullInfo = props.tourData.info
    const shortenedInfo = fullInfo.slice(0, 225) + "..."
    const [isShortened, setIsShortened] = useState(true)
    function toggleLength() {
        setIsShortened(!isShortened)
    }
    return (
        <article className="single-tour">
            <img src={props.tourData.image} alt={props.tourData.name}/>
            <footer>
                <div className="tour-info">
                    <h4>{props.tourData.name}</h4>
                    <h4 className="tour-price">${props.tourData.price}</h4>
                </div>
                <p>
                    {isShortened ? shortenedInfo : fullInfo}
                    <button onClick={toggleLength}>
                        {isShortened ? "read more" : "read less"}
                    </button>
                </p>

                <button
                    onClick={props.removeHandler}
                    data-tour-id={props.tourData.id}
                    className="delete-btn">
                    not interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
