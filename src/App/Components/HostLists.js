import React from 'react';

class HostLists extends React.Component {

render(){

  return(

    <table className="highlight centered">
    <thead>
    <tr>
    <th data-field="url">URL</th>
    <th data-field="desc">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><a href="https://www.vertinext.com">www.vertinext.com</a></td>
    <td>This Website</td>
    </tr>
    <tr>
    <td><a href="https://kingsmouth.vertinext.com">kingsmouth.vertinext.com</a></td>
    <td>Website built for a now defunct text game. Acted as an admin interface.</td>
    </tr>
    <tr>
    <td><a href="https://safehaven.vertinext.com">safehaven.vertinext.com</a></td>
    <td>Wiki for a text game</td>
    </tr>
    <tr>
    <td><a href="https://welltrackr.vertinext.com">welltrackr.vertinext.com</a></td>
    <td>Mock health tracking website made for family that never got used</td>
    </tr>
    <tr>
    <td><a href="http://git.vertinext.com">git.vertinext.com</a></td>
    <td>Personal gitlab server</td>
    </tr>
    <tr>
    <td><a href="http://radialblur.vertinext.com">radialblur.vertinext.com</a></td>
    <td>Django website for a text based game</td>
    </tr>
    </tbody>
    </table>
  )

}

}

module.exports = HostLists;
