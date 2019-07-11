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
    this.setState(prevState => {
      const newData = prevState;
      newData.data[id].status = newData.data[id].status === 'opened' ? 'closed' : 'opened';

      return newData;
    });
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
