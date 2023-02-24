

export default function Hero(props){

    return(
        <div className="hero">
            <div className="cards">
                <div className="left-div">
                    <img src={props.item.imageUrl} alt="issuse" />
                </div>
                <div className="right-div">
                    <p>{props.item.location}</p>
                    <h2>{props.item.title}</h2>
                    <p>{props.item.startDate}-{props.item.endDate}</p>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}