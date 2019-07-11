import React, { Component } from "react";
import CollapseHeader from "./CollapseHeader";
import CollapseContent from "./CollapseContent";
import "./collapse.css";

class Collapse extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "titulo de teste sobre vingadores",
          opened: true,
          content:
            "Lorem laborum dolor ut reprehenderit adipisci Incidunt vel unde soluta atque laborum, corporis delectus assumenda. Explicabo deleniti commodi quis vel temporibus Dolore obcaecati corrupti asperiores dolore autem provident Facilis qui"
        },
        {
          opened: false,
          content:
            "Lorem laborum dolor ut reprehenderit adipisci Incidunt vel unde soluta atque laborum, corporis delectus assumenda. Explicabo deleniti commodi quis vel temporibus Dolore obcaecati corrupti asperiores dolore autem provident Facilis qui"
        }
      ]
    };
  }

  handleClick = id => {
    this.setState({
      data: this.state.data.map((ele, index) =>
        index === id ? { ...ele, opened: !ele.opened } : ele
      )
    });
  };

  render() {
    return (
      <div className="lms-collapse">
        {this.state.data.map((item, index) => (
          <div className="item" key={index}>
            <CollapseHeader
              title={item.title}
              opened={item.opened}
              id={index}
              handleClick={this.handleClick}
            />
            {item.opened && <CollapseContent content={item.content} />}
          </div>
        ))}
      </div>
    );
  }
}

export default Collapse;
