import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment } from '../../actions';

class Counter extends Component {
  constructor() {
    super();

    this.increment = this.increment.bind(this);
  }

  increment() {
    console.log('here');
    this.props.increment();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <ul className="list-group">
            <li className="list-group-item">
              Counter
              <div>{this.props.count}</div>
              <div onClick={this.increment}>Increment</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
