import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTaskStatus } from '../actions/taskActions';
import styles from './Task.css';

export const TASK_STATUS = {
  PENDING: 'PENDING',
  BLOCKED: 'BLOCKED',
  DONE: 'DONE',
  DROPPED: 'DROPPED',
};

export const TASK_STATUS_LIST = Object.keys(TASK_STATUS);
const { PENDING, BLOCKED, DONE, DROPPED } = TASK_STATUS;

export class Task extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  render() {
    const { content, status } = this.props;

    return (
      <label className={styles[status]}>
        <input type='checkbox' checked={status === DONE} onChange={this.toggle}/>
        {content}
      </label>
    )
  };

  toggle(event) {
    event.stopPropagation();

    const {id, status} = this.props;
    const nextStatus = this.getNextStatus(status);
    this.props.setStatus(id, nextStatus);
  }

  getNextStatus() {
    switch(this.props.status) {
      case PENDING: return BLOCKED;
      case BLOCKED: return DONE;
      case DONE: return DROPPED;
      case DROPPED: return PENDING;
      default: return this.props.status;
    }
  }
}

Task.propTypes = {
  content: PropTypes.string,
  status: PropTypes.oneOf(TASK_STATUS_LIST),
  toggle: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    setStatus: (id, status) => dispatch(setTaskStatus(id, status)),
  }
}

export default connect(null, mapDispatchToProps)(Task);
