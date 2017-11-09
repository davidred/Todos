import React from 'react';

class StepList extends React.Component {
  render() {
    const { steps } = this.props;
    const stepItems = steps.map(step => <li>{step.title}</li>);
    return(
      <ul>
        {stepItems}
      </ul>
    );
  }
}

export default StepList;
