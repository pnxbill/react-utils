import React, { Component } from 'react';
import CollapseHeader from './CollapseHeader';
import CollapseContent from './CollapseContent';
import './collapse.css';

class Collapse extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: 'titulo de teste sobre vingadores',
          status: 'opened',
          content: 'Lorem laborum dolor ut reprehenderit adipisci Incidunt vel unde soluta atque laborum, corporis delectus assumenda. Explicabo deleniti commodi quis vel temporibus Dolore obcaecati corrupti asperiores dolore autem provident Facilis qui',
        },
        {
          status: 'closed',
          content: 'Lorem laborum dolor ut reprehenderit adipisci Incidunt vel unde soluta atque laborum, corporis delectus assumenda. Explicabo deleniti commodi quis vel temporibus Dolore obcaecati corrupti asperiores dolore autem provident Facilis qui',
        },
      ],
    };
  }

  handleClick = (id) => {
    this.setState((prevState) => {
      let newItem = prevState.data[id];
      newItem.status = newItem.status === 'opened' ? 'closed' : 'opened';
      let newData = [
        ...prevState.data,
      ];
      newData[id].title = newItem.title;
      newData[id].status = newItem.status;
      newData[id].content = newItem.content;
      return {
        data: [
          ...newData
        ],
      };
    })
  }
  render() {
    return (
      <div className="lms-collapse">
        {this.state.data.map((item, index) => (
          <div className="item" key={index}>
            <CollapseHeader
              title={item.title}
              status={item.status}
              id={index}
              handleClick={this.handleClick}
            />
            <CollapseContent
              content={item.content}
              status={item.status}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Collapse;
