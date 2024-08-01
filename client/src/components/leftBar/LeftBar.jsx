import "./leftBar.scss";
import friends from "../../assets/friends.png";
import groups from "../../assets/groups.png";
import marketplace from "../../assets/marketplace.png";
import watch from "../../assets/watch.png";
import memories from "../../assets/memories.png";
import events from "../../assets/events.png";
import gaming from "../../assets/gaming.png";
import gallery from "../../assets/gallery.png";
import videos from "../../assets/videos.png";
import messages from "../../assets/messages.png";
import fundraiser from "../../assets/fundraiser.png";
import tutorials from "../../assets/tutorials.png";
import courses from "../../assets/courses.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);


  return (
    
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
          <div className="menu">
            <span>Others</span>
            <div className="item">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
          </div>
      </div>
    </div>
  );
};

export default LeftBar;
