import React from 'react';
import GitItem from './GitItem';

class GitListing extends React.Component {

  constructor(props){

    super(props);
    this.state = {data: []};

  }

  loadGitRepos(){

    $.ajax({
      url: "https://api.github.com/users/ccubed/repos",
      dataType: 'json',
      success: (data) =>{
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error("api.github.com", status, err.toString());
      }
    });

  }

  componentDidMount(){

    this.loadGitRepos();

  }

  render(){

    return (<div className="container"><div className="row"><div className="col s6 m12"><GitItem data={this.state.data} /></div></div></div>)

  }

}

module.exports = GitListing;
