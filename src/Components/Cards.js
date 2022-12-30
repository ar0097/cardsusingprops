import './Cards.css';
const Cards = (props) => {
  const img1 = "https://cdn.iconscout.com/icon/free/png-256/save-3244517-2701888.png";

  return (
    <div className="card"> 
      <div className="card2">
        <div className="card1">
        <img src={props.elem.profile} alt=""  className="profile" />
        <span className="span">{props.elem.name}</span>
        </div>
        <h1>{props.elem.head}</h1>
        <p>{props.elem.para}</p>
        <p>{props.elem.date}</p>
        <button>{props.elem.but}</button>
        <img src={img1} alt="" className="img1"/>
      </div>
      <div className="image">
        <img src={props.elem.img} alt="" className="img2"/>
      </div>
    </div>
  )
}

export default Cards;