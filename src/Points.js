import React from 'react';
import { connect } from 'react-redux';
import { Statistic } from 'semantic-ui-react';
import {
  pointsNumeratorSelector,
  pointsDenominatorSelector,
} from './selectors';
import './Points.css';

const certification = score => {
  if (score < 0.5)
    return 'Unfortunately, this score will not qualify your event for a certification ranking. Submitting anyway will put you in contact with our consultants, who can help you get there!';
  if (score < 0.75)
    return 'This score qualifies your event for a bronze certification, well done!';
  if (score < 0.9)
    return 'This score qualifies your event for a silver certification, well done!';
  return 'This score qualifies your event for a gold certification, well done!';
};

const Points = ({ pointsNumerator, pointsDenominator }) => (
  <div className="points">
    <Statistic inverted horizontal>
      <Statistic.Value
      >{`${pointsNumerator}/${pointsDenominator}`}</Statistic.Value>
      <Statistic.Label>Points</Statistic.Label>
    </Statistic>
    <div>{certification(pointsNumerator / pointsDenominator)}</div>
  </div>
);

const mapStateToProps = state => {
  return {
    pointsNumerator: pointsNumeratorSelector(state),
    pointsDenominator: pointsDenominatorSelector(state),
  };
};

export default connect(mapStateToProps)(Points);
