import React, { useState } from 'react';
import './chatList.css'
import search from '../../../assets/myAssets/search.png'
import plus from '../../../assets/myAssets/plus.png'
import minus from '../../../assets/myAssets/minus.png'
import { RxAvatar } from "react-icons/rx";
import AddUser from '../../adduser/AddUser';

const ChatList = () => {
    const [add, setAdd] = useState(plus)
    const [show, setShow] = useState(false)
    const plusChange = () =>{
        setAdd(add === plus ? minus: plus)
        setShow(add === plus ? true : false)
    }
  return (
    <div className='chatList'>
       <div className="search">
            <div className="searchBar">
                <img src={search} alt=""/>
                <input type="text" placeholder='search' />
            </div>
            <img src={add} alt="" className='add' onClick={plusChange}/>
       </div>
       <div className="item">
            <RxAvatar style={{fontSize:"2.3rem"}}/>
            <div className="texts">
                <span>John Doe</span>
                <p>Hello</p>
            </div>
       </div>
       <div className="item">
            <RxAvatar style={{fontSize:"2.3rem"}}/>
            <div className="texts">
                <span>John Doe</span>
                <p>Hello</p>
            </div>
       </div>
       <div className="item">
            <RxAvatar style={{fontSize:"2.3rem"}}/>
            <div className="texts">
                <span>John Doe</span>
                <p>Hello</p>
            </div>
       </div>
       <div className="item">
            <RxAvatar style={{fontSize:"2.3rem"}}/>
            <div className="texts">
                <span>John Doe</span>
                <p>Hello</p>
            </div>
       </div>
       <div className="item">
            <RxAvatar style={{fontSize:"2.3rem"}}/>
            <div className="texts">
                <span>John Doe</span>
                <p>Hello</p>
            </div>
       </div>
       <div className="item">
            <RxAvatar style={{fontSize:"2.3rem"}}/>
            <div className="texts">
                <span>John Doe</span>
                <p>Hello</p>
            </div>
       </div>
       {show &&  <AddUser />}
    </div>
  );
}

export default ChatList;
