import React from 'react';

const NotFound = () => {
  return (
    <section className="container">
      <h1 className="x-large text-primary category">
        <i className="fas fa-exclamation-triangle" />
      </h1>
      <p className="large">
        Looks like you asked a question that was too difficult. Page not found.
      </p>
    </section>
  );
};

export default NotFound;
