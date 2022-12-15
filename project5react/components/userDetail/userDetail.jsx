import React from 'react';
import {
  Typography, Grid
} from '@material-ui/core';
import './userDetail.css';
import '../../modelData/photoApp'
import { cs142models } from '../../modelData/photoApp';
import {
  Link
} from 'react-router-dom';
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: window.cs142models.userModel(this.props.match.params.userId)
  }

  componentDidUpdate= () => {
    window.location.reload()
  }

  render() {
    console.log(this.state.data)
    const user = this.state.data
    return (
      <div
      >
        <ul>
          <li>id:{user._id}</li>
          <li>name:{user.first_name + user.last_name}</li>
          <li>location:{user.location}</li>
          <li>description:{user.description}</li>
          <li>occupation:{user.occupation}</li>
        </ul>
        <Link to={'/photos/' + this.state.data._id}>Photos</Link>
      </div>
    );
  }
}

export default UserDetail;
