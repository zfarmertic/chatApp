import React from 'react'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/login/Login'
import Notification from './components/notification/Notification'
function App() {
  const appUser = true;
  return (
    <div className='container'>
     {appUser ? (<>
        <List />
        <Chat />
        <Detail />
      </>) : (<Login />)
}
    <Notification />
    </div>
  )
}

export default App
