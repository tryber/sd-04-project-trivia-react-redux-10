import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MainHeader extends Component {
  render() {
    const { username, avatar } = this.props;
    return (
      <div className="Default-Header">
        <div className="Avatar-and-Name">
          <img
            data-testid="header-profile-picture"
            className="Avatar-Picture"
            src={avatar}
            alt="User avatar"
          />
          <h3
            data-testid="header-player-name"
            className="Name"
          >
            {username}
          </h3>
        </div>
        <h3 data-testid="header-score" className="Points" >0</h3>
      </div>
    );
  }
}

MainHeader.propTypes = {
  username: PropTypes.func.isRequired,
  avatar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.loginReducer[0].name,
  avatar: state.gravatarReducer.picture,
});
export default connect(mapStateToProps)(MainHeader);
