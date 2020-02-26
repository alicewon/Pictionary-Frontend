import React from "react";
import ReactDOM from "react-dom";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileDrawings from "../Components/ProfileDrawings";

class ProfileContainer extends React.Component {

  render() {
    return(
      <div>

        <ProfileHeader
          username={this.props.username}
        />
        <ProfileDrawings/>
      </div>

    )
  }

}

export default ProfileContainer