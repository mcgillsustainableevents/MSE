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
    return 'Based on the items you selected, your event might not qualify for a sustainable certification yet. Our team of consultants can help you implement more actions to get there. Please click the Next button below and make sure to click Submit on the next page to send us your request!';
  if (score < 0.75)
    return 'Based on the items you selected, your event might qualify for a bronze certification. Our team of consultants will meet with you to verify your score and give you a final certification. Please click the Next button below and make sure to click Submit on the next page to send us your request!';
  if (score < 0.9)
    return 'Based on the items you selected, your event might qualify for a silver certification. Our team of consultants will meet with you to verify your score and give you a final certification. Please click the Next button below and make sure to click Submit on the next page to send us your request!';
  return 'Based on the items you selected, your event might qualify for a gold certification. Our team of consultants will meet with you to verify your score and give you a final certification. Please click the Next button below and make sure to click Submit on the next page to send us your request!';
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
