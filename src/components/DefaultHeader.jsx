import React, { Component } from 'react';

export default class defaultHeader extends Component {
  render() {
    return (
      <div className="Default-Header">
          <div className="Avatar-and-Name">
              <img className="Avatar-Picture"></img>
              <h3 className="Name"></h3>
          </div>
          <h3 className="Points"></h3>
      </div>
    );
  }
}
