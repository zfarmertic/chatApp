import React from 'react';
import './detail.css'
import profile from '../../assets/myAssets/profile.png'
import arrowup from '../../assets/myAssets/arrowup.png'
import arrowdown from '../../assets/myAssets/arrowdown.png'
import downarrow from '../../assets/myAssets/downarrow.png'
import balls from '../../assets/myAssets/balls.jpg'
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src={profile} alt=""  style={{width:"100px", height:"100px", borderRadius:"50%", objectFit:"cover"}}/>
        <h2>username</h2>
        <p>Description</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src={arrowup} alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src={arrowup} alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src={downarrow} alt="" />
          </div>
          <div className="photos">
            <div className="photItem">
              <div className="photDetail">
                <img src={balls} alt="" style={{width:"30px", height:"30px", objectFit:"cover",borderRadius:"5px"}}/>
                <span>myPhoto.png</span>
              </div>
              <img src={arrowdown} alt="" className='icon'/>
            </div>
            <div className="photItem">
              <div className="photDetail">
                <img src={balls} alt="" style={{width:"30px", height:"30px", objectFit:"cover",borderRadius:"5px"}}/>
                <span>myPhoto.png</span>
              </div>
              <img src={arrowdown} alt="" className='icon'/>
            </div>
            <div className="photItem">
              <div className="photDetail">
                <img src={balls} alt="" style={{width:"30px", height:"30px", objectFit:"cover",borderRadius:"5px"}}/>
                <span>myPhoto.png</span>
              </div>
              <img src={arrowdown} alt="" className='icon'/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src={arrowup} alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className='logOut'>Log out</button>
      </div>
    </div>
  );
}

export default Detail;
