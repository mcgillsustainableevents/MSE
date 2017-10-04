import React from 'react';
import Buttons from './Buttons.js';
import TextInput from './TextInput.js';
import Submit from './Submit.js';
import Complete from './Complete.js';
import Question from './Question';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import Calculator from './Calculator';
import Learn from './Learn';

const App = () => (
  <div className="app">
    <Route exact path="/" component={Landing} />
    <Route
      path="/questions/1"
      render={() => (
        <Question
          number={1}
          question="What is your name?"
          controls={<TextInput to="/questions/2" valueKey="name" />}
        />
      )}
    />
    <Route
      path="/questions/2"
      render={() => (
        <Question
          number={2}
          question="What is your email?"
          controls={<TextInput to="/questions/3" valueKey="email" />}
        />
      )}
    />
    <Route
      path="/questions/3"
      render={() => (
        <Question
          number={3}
          question="What is your event name?"
          controls={<TextInput to="/questions/4" valueKey="eventName" />}
        />
      )}
    />
    <Route
      path="/questions/4"
      render={() => (
        <Question
          number={4}
          question="Where will your event be held?"
          controls={<TextInput to="/questions/5" valueKey="location" />}
        />
      )}
    />
    <Route
      path="/questions/5"
      render={() => (
        <Question
          number={5}
          question="When is your event?"
          controls={<TextInput to="/questions/6" valueKey="date" />}
        />
      )}
    />
    <Route
      path="/questions/6"
      render={() => (
        <Question
          number={6}
          question="How many people will be attending?"
          controls={<TextInput to="/questions/7" valueKey="amount" />}
        />
      )}
    />
    <Route
      path="/questions/7"
      render={() => (
        <Question
          number={7}
          question="Will you be serving food or beverages?"
          controls={<Buttons valueKey="food" enable={[30, 31, 32, 33, 34, 35]} to="/questions/8" />}
        />
      )}
    />
    <Route
      path="/questions/8"
      render={() => (
        <Question
          number={8}
          question="Is your event sponsored?"
          controls={<Buttons valueKey="sponsored" enable={[1]} to="/questions/9" />}
        />
      )}
    />
    <Route
      path="/questions/9"
      render={() => (
        <Question
          number={9}
          question="Will you be buying any supplies?"
          controls={<Buttons valueKey="supplies" enable={[26, 27, 28]} to="/questions/10" />}
        />
      )}
    />
    <Route
      path="/questions/10"
      render={() => (
        <Question
          number={10}
          question="Will you be printing, creating or purchasing materials for distribution or promotion?"
          controls={<Buttons valueKey="materials" enable={[38, 40]} to="/questions/11" />}
        />
      )}
    />
    <Route
      path="/questions/11"
      render={() => (
        <Question
          number={11}
          question="Are you charging for entrance to your event?"
          controls={<Buttons valueKey="charging" enable={[6]} to="/questions/12" />}
        />
      )}
    />
    <Route
      path="/questions/12"
      render={() => (
        <Question
          number={12}
          question="Does your event include small-group discussions?"
          controls={<Buttons valueKey="discussions" enable={[20, 24]} to="/calculator" />}
        />
      )}
    />
    <Route path="/calculator" component={Calculator} />
    <Route path="/submit" component={Submit} />
    <Route path="/complete" component={Complete} />
    <Route path="/learn" component={Learn} />
  </div>
);

export default App;
