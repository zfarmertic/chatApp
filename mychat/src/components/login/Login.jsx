import React, { useState } from 'react'
import '../login/login.css'
import profile from '../../assets/myAssets/profile.png'
import { toast } from 'react-toastify';

function Login() {
    const [image, setImage] = useState({
        file : null,
        url : ""
})
    const handleSelectImage = (e) =>{
        if(e.target.files[0]){
            setImage({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        toast.warn("hello")
    }
  return (
    <div className='login'>
       <div className="firstItem">
            <h2>Welcome back,</h2>
            <form action="" onSubmit={handleLogin}>
                 <input type="text" name="username" placeholder='username' id="" />
                <input type="email" name="email" placeholder="email" id="" />
                <input type="password" name="password" placeholder='password' id="" />
                <button>Sign in</button>
            </form>
       </div>
       <div className="seperator"></div>
       <div className="firstItem">
       <h2>Create Account</h2>
            <form action="">
                <label htmlFor="file"><img src={image.url || profile} alt="" style={{width:"50px", height:"50px", borderRadius:"10px", objectFit:"cover", opacity:0.6}} /> Upload an image</label>
                <input type="file" name="file" id="file" style={{display:"none"}}  onChange={handleSelectImage}/>
                <input type="email" name="" id="" placeholder='email'/>
                <input type="password" name="" id="" placeholder='password'/>
                <input type="password" name="password" id="" placeholder='confirm password'/>
                <button>Sign up</button>
            </form>
       </div>
    </div>
  )
}

export default Login
