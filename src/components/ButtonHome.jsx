import React, { Component } from 'react';

export default class ButtonHome extends Component {
  render() {
    const { dataTestid, type, text, onClick, className } = this.props;
    return (
      <button className={home-btn} data-testid={btn-go-home} type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
}
