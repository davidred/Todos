import { connect } from 'react-redux';
import StepList from './step_list';

import { receiveStep, removeStep } from '../../actions/step_actions';
// const mapStateToProps = state => {

// }

const mapDispatchToProps = dispatch => ({
  removeStep: (step) => dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(null, mapDispatchToProps)(StepList);
