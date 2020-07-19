import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ticTac, freezeClock } from '../actions/index';

function ableButtonNext() {
  const buttonNext = document.querySelector('.next');
  buttonNext.style.display = 'block';
}

function dissableAnswer() {
  const correct = document.querySelector('.correct');
  const wrongs = document.querySelectorAll('.wrong');
  correct.disabled = true;
  wrongs.forEach((wrong) => {
    const answerWrong = wrong;
    answerWrong.disabled = true;
  });
}

class Timer extends Component {
  componentDidMount() {
    const { setCounter } = this.props;

    this.timerID = setInterval(() => setCounter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  freezeTimer() {
    const { pausedCounter } = this.props;
    pausedCounter();
    clearInterval(this.timerID);
    ableButtonNext();
    dissableAnswer();
  }

  timerAgain() {
    const { setCounter } = this.props;
    setCounter();
  }

  render() {
    const { time } = this.props;
    if (time === 0) this.freezeTimer();
    // if (freezing) clearInterval(this.timerID);
    return (
      <div>
        <h6>
          Tempo:
          {time}
        </h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.counterTimeReducer.counter,
  freezing: state.counterTimeReducer.freeze,
});

const mapDispatchToProps = (dispatch) => ({
  setCounter: () => dispatch(ticTac()),
  pausedCounter: () => dispatch(freezeClock()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
  pausedCounter: PropTypes.func.isRequired,
  // freezing: PropTypes.bool.isRequired,
};
