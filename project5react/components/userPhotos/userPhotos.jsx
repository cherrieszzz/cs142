import React from 'react';
import {
  Typography 
} from '@material-ui/core';
import './userPhotos.css';
import { cs142models } from '../../modelData/photoApp';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    photo: window.cs142models.photoOfUserModel(this.props.match.params.userId)
  }

  render() {
    console.log(this.state.photo)
    return (
      <Typography variant="body1">
        So this should show details of user:
        {this.props.match.params.userId}.
        <br />
        {
          this.state.photo.map(value => {
            return (
                  <img key={value._id} src={'../../images/' + value.file_name} alt="asd" className="photo_img"/>
            )
          })
        }
      </Typography>

    );
  }
}

export default UserPhotos;
