import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { dataTestid, type, text, onClick, className } = this.props;
    return (
      <button className={className} data-testid={dataTestid} type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
}
