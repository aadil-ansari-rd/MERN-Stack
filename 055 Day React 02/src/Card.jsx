import "./card.css";

function Card({props}) {
    return (
        <div className="Card">
            <div className="cardTitle">{props.title}</div>
            <div className="cardDes">
                <div className="cardDes1">{props.des1}</div>
                <div className="cardDes2" style={{marginTop: "20px"}}>{props.des2}</div>
            </div>

            <div className="price">
                <span className="p1">{props.p1} </span>
                <span className="p2" style={{marginLeft:"8px"}}>{props.p1}</span>
            </div>
        </div>
    )
}

export default Card;
