import React from 'react';
import InvisibleLink from '../../../Components/InvisibleLink';
import '../Session.css';

function StudentSessionEnabled() {
  return (
    <div>
      <h3>How to apply for Student Sessions:</h3>
      <h4>
        <li>
          Go to your <InvisibleLink to="/user"> profile </InvisibleLink> and
          fill in your phone number and upload your CV(s).
        </li>
        <li>
          Go to
          <InvisibleLink to="/session/application"> apply </InvisibleLink>
          and choose a company. Write a short motivation and submit your
          application.
        </li>
        <br />
        Note: If you apply for more than one company they will all receive the
        same CV(s) but different motivations. You can view all your applications
        <InvisibleLink to="/session/applications"> here</InvisibleLink>.
      </h4>
      <br />
      <br />
    </div>
  );
}

function StudentSessionDisabled() {
  return (
    <div>
      <h3>
        Student sessions are not available yet, but you can already update your
        profile.
      </h3>
      <h4>
        <li>
          Go to your <InvisibleLink to="/user"> profile </InvisibleLink> and
          fill in your phone number and upload your CV(s).
        </li>
      </h4>
      <br />
      <br />
    </div>
  );
}

const SessionHome = () => (
  <div className="session-home">
    <h1>Welcome to Student Session!</h1>

    {process.env.REACT_APP_STUDENT_SESSION_ENABLED === 'true' ? (
      <StudentSessionEnabled />
    ) : (
      <StudentSessionDisabled />
    )}

    <h3>Do you want to know more about the companies?</h3>
    <h4>
      <InvisibleLink to="/session/companies">Go to Companies</InvisibleLink>
    </h4>
    <br />
    <br />
    <h3>Do you have any questions about the student sessions?</h3>
    <h4>
      Contact:
      <a href="mailto:company.arkad@tlth.se"> company.arkad@tlth.se </a>
    </h4>
  </div>
);

export default SessionHome;
