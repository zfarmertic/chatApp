import React, { useState } from 'react';
import './chat.css'
import { RxAvatar } from "react-icons/rx";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { RiEmojiStickerLine } from "react-icons/ri";
import { GoImage } from "react-icons/go";
import { FiCamera } from "react-icons/fi";
import { FiMic } from "react-icons/fi";
import EmojiPicker from 'emoji-picker-react'


const Chat = () => {
  const[emoji, setEmoji] = useState(false)
  const [message, setMessage] = useState("")
  function handleEmojiPicker(){
    setEmoji(!emoji)
  }
  function addEmoji(e){
    setMessage((prev)=> prev + e.emoji)
  }
  return (
    <div className='chat'>
      <div className="top">
        <div className="users">
          <RxAvatar style={{fontSize:"2.7rem"}}/>
          <div className="text">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="icon">
          <FaPhoneAlt />
          <FaVideo />
          <IoIosInformationCircle />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="iconn">
          <GoImage style={{cursor:"pointer"}}/>
          <FiCamera style={{cursor:"pointer"}}/>
          <FiMic style={{cursor:"pointer"}}/>
        </div>
        <input type="text" placeholder='Type a message...' className='myMessage' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
        <div className="emoji">
          <RiEmojiStickerLine style={{fontSize:"1.2rem", cursor:"pointer"}} onClick={handleEmojiPicker}/>
          <div className="emojiBox">
            {emoji  && <EmojiPicker onEmojiClick={addEmoji} style={{ height: '300px' }}/>}
          </div>
        </div>
        <button className="sendbtn">Send</button>
      </div>
    </div>
  );
}

export default Chat;
