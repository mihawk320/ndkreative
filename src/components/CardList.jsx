import React from "react";

import Cards from "./Cards";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            image: "https://picsum.photos/500/300/?image=10",
            titulo: "mug de bunbury",
            descripcion: "Mug de excelente calidad de enrique bunbury",
          },
          {
            image: "https://picsum.photos/500/300/?image=10",
            titulo: "mug de bunbury",
            descripcion: "Mug de excelente calidad de enrique bunbury",
          },
          {
            image: "https://picsum.photos/500/300/?image=10",
            titulo: "mug de bunbury",
            descripcion: "Mug de excelente calidad de enrique bunbury",
          },
        ],
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componenteDidUpdate()");

    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }
  componentWillUnmount() {
    console.log("6. componentWillUnMount()");
    clearTimeout(this.timeoutId);
  }
  render() {
    console.log("2/4. render()");
    return (
      <div>
        <div className="container">
          <Cards cards={this.state.data} />
        </div>
      </div>
    );
  }
}

export default CardList;
