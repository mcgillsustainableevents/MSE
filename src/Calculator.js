import React from 'react';
import { connect } from 'react-redux';
import { switchAction, nextView, setKV } from './actions.js';
import {
  Button,
  Image,
  Statistic,
  Header,
  Container,
  Divider,
  Segment,
  Label,
  Checkbox,
  List,
  Grid
} from 'semantic-ui-react';

const lorem = (
  <div>
    <p>
      Sit porro dolorem architecto. Non reiciendis iste eos totam earum earum at eaque aut. Totam
      nostrum ut itaque placeat distinctio et ducimus. Autem quia quos. Maiores rerum ut molestiae
      officiis quos repellendus ad deleniti. Ut et aut laborum facilis est praesentium eum
      aspernatur. Odit ad voluptatem mollitia unde veritatis dignissimos ratione. Iste cupiditate
      eos officiis sit voluptate tenetur quod qui laboriosam. Eaque autem repudiandae mollitia.
      Assumenda error recusandae modi. Aut quisquam quia est mollitia sed. Libero molestiae
      consequuntur aperiam autem qui placeat.
    </p>
    <p>
      Esse sint quos. Delectus eligendi et minus ex iure sint. Saepe nisi ullam rerum porro. Odit
      molestias ut eveniet. In eius id. Inventore sequi ex odit fugiat doloribus sint veritatis
      porro. Corrupti quam ducimus illo porro voluptas fugit. Quis iste impedit omnis. Et et nisi ex
      facilis veritatis. Atque illum eius placeat officiis illo necessitatibus totam animi
      provident. Exercitationem quibusdam neque voluptatum voluptatibus qui provident. Consectetur
      recusandae voluptatem et possimus illum. Veritatis qui est et
    </p>
  </div>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: -1, active2: -1 };
  }

  handleClick = index => {
    this.state.active === index ? this.setState({ active: -1 }) : this.setState({ active: index });
    this.setState({ active2: -1 });
  };

  handleClick2 = index => {
    this.state.active2 === index
      ? this.setState({ active2: -1 })
      : this.setState({ active2: index });
  };

  handleActionTitleClick = (e, index) => {
    e.stopPropagation();
    this.handleClick(index);
  };

  handleActionTitleClick2 = (e, index) => {
    e.stopPropagation();
    this.handleClick2(index);
  };

  handleCheck = (e, index) => {
    e.stopPropagation();
    this.props.switchAction(index);
  };

  formatActions = (start, end) => {
    var actions = [];
    var lowPriorityActions = [];
    var inapplicableActions = [];
    for (var i = start; i <= end; i++) {
      const index = i;
      let color;
      if (this.props.actions[index].time === 'HIGH') {
        color = 'red';
      }
      if (this.props.actions[index].time === 'MED') {
        color = 'yellow';
      }
      if (this.props.actions[index].time === 'LOW') {
        color = 'green';
      }
      if (this.props.actions[index].applicable && this.props.actions[index].priority === 0) {
        actions.push(
          <Segment key={`${index}-action`} onClick={() => this.handleClick(index)}>
            <div>
              <Checkbox
                checked={this.props.actions[index].checked}
                onClick={e => this.handleCheck(e, index)}
                label={{
                  children: (
                    <div onClick={e => this.handleActionTitleClick(e, index)}>
                      <Label horizontal color={color}>
                        {this.props.actions[index].time}
                      </Label>
                      {this.props.actions[index].action}
                    </div>
                  )
                }}
              />
            </div>
            {this.state.active === index &&
              <div>
                <div style={{ height: '10px' }} />
                <Divider fitted />
                <div style={{ height: '5px' }} />
                <div onClick={e => e.stopPropagation()}>
                  {lorem}
                </div>
              </div>}
          </Segment>
        );
      } else if (this.props.actions[index].applicable && this.props.actions[index].priority === 1) {
        lowPriorityActions.push(
          <Segment key={`${index}-action`} onClick={() => this.handleClick(index)}>
            <Checkbox
              checked={this.props.actions[index].checked}
              onClick={e => this.handleCheck(e, index)}
              label={{
                children: (
                  <div onClick={e => this.handleActionTitleClick(e, index)}>
                    <Label horizontal color={color}>
                      {this.props.actions[index].time}
                    </Label>
                    {this.props.actions[index].action}
                  </div>
                )
              }}
            />
            {this.state.active === index &&
              <div>
                <div style={{ height: '10px' }} />
                <Divider fitted />
                <div style={{ height: '5px' }} />
                <div onClick={e => e.stopPropagation()}>
                  {lorem}
                </div>
              </div>}
          </Segment>
        );
      } else {
        inapplicableActions.push(
          <Segment
            key={`${index}-action`}
            onClick={e => {
              e.stopPropagation();
              this.handleClick2(index);
            }}
          >
            <div onClick={e => this.handleActionTitleClick2(e, index)}>
              <Label horizontal>N/A</Label>
              {this.props.actions[i].action}
            </div>
            {this.state.active2 === index &&
              <div>
                <div style={{ height: '10px' }} />
                <Divider fitted />
                <div style={{ height: '5px' }} />
                <div onClick={e => e.stopPropagation()}>
                  {lorem}
                </div>
              </div>}
          </Segment>
        );
      }
    }
    actions = actions.concat(lowPriorityActions);
    if (inapplicableActions.length > 0) {
      actions.push(
        <Segment
          key={`${start}-${end}-extra`}
          onClick={() => this.handleClick(`${start}-${end}-extra`)}
        >
          N/A
          {this.state.active === `${start}-${end}-extra` &&
            <div>
              <div style={{ height: '1px' }} />
              <Segment.Group>
                {inapplicableActions}
              </Segment.Group>
            </div>}
        </Segment>
      );
    }
    return actions;
  };

  formatCategory = (category, i) => {
    return (
      <div key={`${i}-category`}>
        <Header style={{ color: 'white', fontWeight: 300 }} as="h1">
          {category.category}
        </Header>
        <Segment.Group>
          {this.formatActions(category.start, category.end)}
        </Segment.Group>
        <div style={{ height: '15px' }} />
      </div>
    );
  };

  calculateCheckedPoints = () => {
    return Object.keys(this.props.actions).reduce(
      (acc, key) =>
        this.props.actions[key].checked ? acc + this.props.actions[key].points.numerator : acc,
      0
    );
  };

  calculateApplicablePoints = () => {
    console.log(this.props.actions);
    return Object.keys(this.props.actions).reduce((acc, key) => {
      console.log(key);
      return this.props.actions[key].applicable
        ? acc + this.props.actions[key].points.denominator
        : acc;
    }, 0);
  };

  medal = () => {
    var percentage = this.calculateCheckedPoints() / this.calculateApplicablePoints();
    if (percentage < 0.5) {
      return 'Unfortunately, this score will not qualify your event for a certification ranking. Submitting anyway will put you in contact with our consultants, who can help you get there!';
    } else if (percentage < 0.75) {
      return 'This score qualifies your event for a bronze certification, well done!';
    } else if (percentage < 0.9) {
      return 'This score qualifies your event for a silver certification, well done!';
    } else {
      return 'This score qualifies your event for a gold certification, well done!';
    }
  };

  render() {
    return (
      <Container>
        <div style={{ height: '25px' }} />
        <Image style={{ maxWidth: '500px', margin: 'auto' }} src="mse_logo.svg" />
        <div style={{ height: '20px' }} />
        <Grid stackable columns={2}>
          <Grid.Column width={12}>
            <div style={{ color: 'white', textAlign: 'justify', fontWeight: 300 }}>
              Below you’ll find the actions that comprise our certification criteria. Each action is
              worth 1 or 2 points, which are tallied to determine an event’s level of certification.
              Based on your questionnaire responses, you may find some actions are labeled
              inapplicable. Click on an action to drop down more information!{' '}
            </div>
          </Grid.Column>
          <Grid.Column width={4} textAlign="left">
            <List>
              <List.Item>
                <Label horizontal color="green">LOW</Label>
                <span style={{ color: 'white', fontWeight: 300 }}>= Low time commitment</span>
              </List.Item>
              <List.Item>
              <Label horizontal color="yellow">MED</Label>
                <span style={{ color: 'white', fontWeight: 300 }}>= Medium time commitment</span>
              </List.Item>
              <List.Item>
              <Label horizontal color="red">HIGH</Label>
                <span style={{ color: 'white', fontWeight: 300 }}>= High time commitment</span>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
        <div style={{ height: '25px' }} />
        {this.props.categories.map(this.formatCategory)}
        <div style={{ textAlign: 'center' }}>
          <Statistic inverted horizontal>
            <Statistic.Value>
              {`${this.calculateCheckedPoints()}/${this.calculateApplicablePoints()}`}
            </Statistic.Value>
            <Statistic.Label>Points</Statistic.Label>
          </Statistic>
          <p style={{ color: 'white' }}>
            {this.medal()}
          </p>
        </div>
        <div style={{ height: '15px' }} />
        <Button
          size="big"
          fluid
          onClick={() =>
            this.props.submit(
              `${this.calculateCheckedPoints()}/${this.calculateApplicablePoints()}`,
              Object.keys(this.props.actions)
                .filter(key => this.props.actions[key].checked)
                .toString()
            )}
        >
          Next
        </Button>
        <Divider hidden />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    actions: state.actions,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchAction: id => dispatch(switchAction(id)),
    submit: (score, checked) => {
      dispatch(setKV('score', score));
      dispatch(setKV('checked', checked));
      dispatch(nextView());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
