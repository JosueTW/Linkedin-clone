import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import './Sidebar.css';

function Sidebar() {
  const user = useSelector(selectUser);
 
  const recentItem = (topic) => (
      <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
      </div>
  );

  return (
    <div className="sidebar"> 
       <div className="sidebar__top">
          <img src="https://i.pinimg.com/originals/12/54/09/1254093eda28964ac2ea4d158e7c0706.png"
               alt="cover pics"
           />    
          <Avatar src={user.photoUrl} className="sidebar__avatar" />
          {user.email[0]}
          <h2>Josue Tandoum Waffo</h2>
          <h4>Chief Executive Officer at InsurAfrica (Pty) Ltd</h4>
        </div> 

      <div className="sidebar__stats">
           <div className="sidebar__stat">
            <p>Who viewed your profile</p>
            <p className="sidebar__statNumber">130</p>
        </div>
        <div className="sidebar__stat">
            <p>Views of your post</p>
            <p className="sidebar__statNumber">584</p>
        </div>
      </div>

       <div className="sidebar__top">
          <img src=""
               alt=""
           />    
          <Avatar className="sidebar__avatar" />
          <h2>JM Capital Africa Ltd</h2>
        </div> 
      <div className="sidebar__stats">
           <div className="sidebar__stat">
            <p>Page notifications</p>
            <p className="sidebar__statNumber">8</p>
        </div>
        <div className="sidebar__stat">
            <p>Page visitors</p>
            <p className="sidebar__statNumber">13</p>
        </div>
      </div>

      <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("fullstackengineering")}
            <h4>Groups</h4>
            {recentItem("fullstackdesign")}
            <h4>Events</h4> 
            {recentItem("digitaltransformation")}
           <h4>Followed Hastags</h4>
            {recentItem('puttingafricaonthemap')}
            {recentItem('fintech')}
            {recentItem('spaceX')}
            {recentItem("renewablenergy")}
            {recentItem("projectfinance")}
            {recentItem("financialmodelling")}
            {recentItem("jugaad")}
            {recentItem("adalfellowship")}
            {recentItem("fullstackcncshop")}
            {recentItem("fullstackAI/MLpython")}
            </div>

      <div className="sidebar_bottomLast">
       <p>Discover more</p>
        </div>
    </div>  
  );
}

export default Sidebar;
