import React from 'react';
import Spinner from 'react-spinkit';

class Gititem extends React.Component {

  constructor(props){

    super();

  }

  render() {

    var repoNodes = [];

    if( this.props.data.length > 0 ){

      this.props.data.forEach(function(repo){

        repoNodes.push(<li className="collection-item avatar">
        <img className="circle" src={repo.owner.avatar_url} alt={repo.owner.login}></img>
        <span className="title"><a href={repo.html_url}>{repo.name}</a></span>
        <p>{repo.description ? repo.description : "No description given."}</p>
        <a href={repo.forks_url} className="secondary-content"><i className="fa fa-code-fork fa-2x"></i></a>
        </li>);

      });

    }

    return repoNodes.length > 0 ? (<ul className="collection">{repoNodes}</ul>) : (<Spinner spinnerName='three-bounce' />);

  }
}

module.exports = Gititem;
