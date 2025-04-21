import React from 'react';
import './userinfo.css'
import { FaVideo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";

const UserInfo = () => {
  return (
    <div className='userInfo'>
       <div className="user">
            <RxAvatar style={{fontSize:"2.3rem"}}/>
            <h2>John Doe</h2>
       </div>
       <div className="icons">
       <TfiMoreAlt />
        <FaVideo />
        <FaEdit />
       </div>
    </div>
  );
}

export default UserInfo;
