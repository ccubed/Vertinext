import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col s12">
      <div className="card hoverable">
      <div className="card-content red-text">
        <span className="card-title red-text">Charles C Click</span><br />
        Email:&nbsp;<a href="mailto:CharlesClick@vertinext.com">CharlesClick@vertinext.com</a><br />
        Skillset:&nbsp;Web Development<br />
        This Website:&nbsp;<a href="https://facebook.github.io/react/">React</a> and <a href="http://materializecss.com/">Materialize</a><br />
        <blockquote>
          I am a coder and web developer in Knoxville, TN, who also hosts websites, games and other services through a personal server. There is a list of my Github repositories and currently hosted games and services available on other pages.
        </blockquote>
      </div>
      <div className="card-action red-text">
        <a href="https://docs.google.com/document/d/1ykS2_34-GQd0SbrjpG9NbBvq40L62qWxGJc43KAjOD8/edit?usp=sharing">View Resume</a>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

module.exports = Home;
