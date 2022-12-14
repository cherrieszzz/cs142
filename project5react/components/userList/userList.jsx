import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
  from '@material-ui/core';
import './userList.css';
import '../../modelData/photoApp'
import {
  Link
} from 'react-router-dom';
/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    Users: window.cs142models.userListModel()
  }

  render() {
    return (
      <div>
        {/* <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://mui.com/components/lists/">Lists</a> and <a href="https://mui.com/components/dividers/">Dividers</a> to
          display your users like so:
        </Typography> */}
        <List component="nav">
          {
            this.state.Users.map(value => {
              return (
                <div key={value._id}>
                  <ListItem>
                    <Link to={'/users/' + value._id}>
                      <ListItemText primary={value.first_name + " " + value.last_name} />
                    </Link>

                  </ListItem>
                  <Divider />
                </div>

              )
            })
          }
        </List>
        {/*  <Typography variant="body1">
          The model comes in from window.cs142models.userListModel()
        </Typography> */}
      </div>
    );
  }
}

export default UserList;
