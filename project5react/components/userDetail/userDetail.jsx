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
    return (
      <Grid container
      alignItems="center"
      >
        {
          this.state.data.first_name
        }
        <Link to={'/photos/' + this.state.data._id}>Photos</Link>
      </Grid>
    );
  }
}

export default UserDetail;
