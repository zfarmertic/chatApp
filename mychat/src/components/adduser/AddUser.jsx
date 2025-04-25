import React from 'react'
import './addUser.css'
import profile from '../../assets/myAssets/profile.png'

function AddUser() {
  return (
    <div  className='addUser'>
        <form action="">
            <input type="text" placeholder='username' name='username' />
            <button>Search</button>
        </form>
        <div className="userd">
            <div className="detail">
                <img src={profile} alt="" />
                <span>John Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser
