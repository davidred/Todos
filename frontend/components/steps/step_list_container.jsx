import { connect } from 'react-redux';
import StepList from './step_list';

import { receiveStep, removeStep } from '../../actions/step_actions';
import { getAllSteps} from '../../reducers/selectors';

const mapStateToProps = state => ({
  steps: getAllSteps(state),
  state
})

const mapDispatchToProps = dispatch => ({
  removeStep: (step) => dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
