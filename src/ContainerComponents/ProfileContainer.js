import React from "react";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileDrawings from "../Components/ProfileDrawings";

class ProfileContainer extends React.Component {

  render() {
    return(
      <div>
        <ProfileHeader
          username={this.props.username}
          user={this.props.user}
        />
        <ProfileDrawings/>
      </div>

    )
  }

}

export default ProfileContainer