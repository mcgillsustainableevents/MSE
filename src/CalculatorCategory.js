import { connect } from 'react-redux';
import { actionsSelector } from './selectors';
import Category from './Category';
import moment from 'moment';

const mapStateToProps = (state, { category }) => {
  if (moment(state.getIn(['data', 'date']), 'MM/DD/YY').isBefore(moment().add(2, 'weeks'))) {
    return {
      actions: actionsSelector(state).filter(
        action => action.category === category && action.learn === false && action.applicable
      ).sort((a, b) => {
        const timeToNum = action => {
          if (action.time === 'LOW') {return 1}
          if (action.time === 'MED') {return 2}
          if (action.time === 'HIGH') {return 3}
        }
        if (timeToNum(a) < timeToNum(b)) { return -1}
        if (timeToNum(a) > timeToNum(b)) { return 1}
        if (timeToNum(a) === timeToNum(b)) { return 0}
        return 0;
      })
    }
  }

  return {
    actions: actionsSelector(state).filter(
      action => action.category === category && action.learn === false && action.applicable
    )
  };
}

export default connect(mapStateToProps)(Category);
