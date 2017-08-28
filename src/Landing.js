import React from 'react'
import Centered from './Centered';
import { Link } from 'react-router-dom';

const Landing = () =>
  <Centered>
    <img
      style={{ marginBottom: '15px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}
      className="ui image"
      src="/mse_logo.svg"
    />
    <div style={{ height: '10px' }} />
    <p style={{ fontWeight: 300 }}>
      McGill Sustainable Events is an initiative that grew from the{' '}
      <a style={{ color: 'white', fontWeight: 400 }} href="http://www.mcgill.ca/sustainability">
        McGill Office of Sustainability
      </a>. Our mandate is to provide consultation, training, resources, and certification with
      regards to the sustainability (ecological, social, and economic) of events planned by McGill
      students, staff, and faculty. We can be reached at{' '}
      <a style={{ color: 'white', fontWeight: 400 }} href="mailto:events.sustainability@mcgill.ca">
        events.sustainability@mcgill.ca
      </a>.
    </p>
    <div className="ui relaxed items">
      <div className="item">
        <div className="middle aligned content">
          <div style={{ color: 'white' }} className="ui large header">
            Learn.
          </div>
          <p style={{ fontWeight: 300 }}>
            Answer some quick questions and discover the most important actions to take to have your
            event certified.
          </p>
        </div>
      </div>
      <div className="item">
        <div className="middle aligned content">
          <div style={{ color: 'white' }} className="ui large header">
            Implement.
          </div>
          <p style={{ fontWeight: 300 }}>
            After you’ve applied for certification, our consultant team will be in touch to guide
            you through the implementation process, and arrange your certification meeting (~30
            min).
          </p>
        </div>
      </div>
      <div className="item">
        <div className="middle aligned content">
          <div style={{ color: 'white' }} className="ui large header">
            Get certified.
          </div>
          <p style={{ fontWeight: 300 }}>
            We know you’ll be proud of your accomplishments, and we want to help you share that
            pride! Following your certification, you will be provided publicity material to promote
            your achievement of bronze, silver, or gold certification.
          </p>
        </div>
      </div>
    </div>
    <div className="ui stackable grid">
      <div className="eight wide column">
        <Link to={{pathname: "/questions/1", state: {question: 0}}}>
          <button
            className="ui massive button fluid large"
            style={{ backgroundColor: 'white', color: '#2185D0' }}
          >
            Get certified
          </button>
        </Link>
      </div>
      <div className="eight wide column">
        <button
          className="ui massive button fluid large"
          style={{ backgroundColor: 'white', color: '#2185D0' }}
        >
          Learn
        </button>
      </div>
      <div className="center aligned column sixteen wide">
        <span>Funded by &nbsp</span>
        <a href="http://www.mcgill.ca/sustainability/spf">
          <img style={{ width: '200px' }} className="ui bottom aligned image" src="spf_logo.svg" />
        </a>
      </div>
      <div className="center aligned column sixteen wide">
        <span>In partnership with &nbsp</span>
        <a href="http://www.mcgill.ca/sustainability/spf">
          <img style={{ width: '200px' }} className="ui middle aligned image" src="sam_logo.svg" />
        </a>
      </div>
    </div>
  </Centered>;

export default Landing;
