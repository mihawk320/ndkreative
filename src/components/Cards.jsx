import React from "react";
import "./styles/CardStyle.css";
class Cards extends React.Component {
  render() {
    return (
      <div className="main">
        <ul className="cards">
          {this.props.cards.map((cards, tarjeta) => {
            return (
              <li className="cards_item" key={tarjeta}>
                <div className="card">
                  <div className="card_image">
                    <img src={cards.image} alt="imagenxd" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title"> {cards.titulo} </h2>
                    <p className="card_text">{cards.descripcion}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cards;
