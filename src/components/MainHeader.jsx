import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MainHeader extends Component {
  render() {
    const { username, avatar, score } = this.props;
    return (
      <div className="Default-Header">
        <div className="Avatar-and-Name">
          <img
            data-testid="header-profile-picture"
            className="Avatar-Picture"
            src={avatar}
            alt="User avatar"
          />
          <h3 data-testid="header-player-name" className="Name">
            {username}
          </h3>
        </div>
        <h3 data-testid="header-score" className="Points">
          {score}
        </h3>
      </div>
    );
  }
}

MainHeader.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.loginReducer.name,
  score: state.loginReducer.score,
  avatar: state.gravatarReducer.picture,
});
export default connect(mapStateToProps)(MainHeader);
