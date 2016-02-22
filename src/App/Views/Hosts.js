import React from 'react';
import HostLists from '../Components/HostLists';

class Hosts extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col s12">
      <HostLists />
      </div>
      </div>
      </div>
    );
  }
}

module.exports = Hosts;
