import React from 'react';
import { connect } from 'react-redux';
import { Statistic } from 'semantic-ui-react';
import { pointsNumeratorSelector, pointsDenominatorSelector } from './selectors';
import './Points.css';

const Points = ({pointsNumerator, pointsDenominator }) => (
<div className="points">
  <Statistic inverted horizontal>
    <Statistic.Value>
      {`${pointsNumerator}/${pointsDenominator}`}
    </Statistic.Value>
    <Statistic.Label>Points</Statistic.Label>
  </Statistic>
  </div>
);

const mapStateToProps = state => {
  return {
    pointsNumerator: pointsNumeratorSelector(state),
    pointsDenominator: pointsDenominatorSelector(state)
  };
};

export default connect(mapStateToProps)(Points);
