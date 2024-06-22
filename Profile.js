import React from 'react'
import ChangeProfile from '../components/ChangeProfile'

const Profile = (props) => {
  return (
    <div>
        <h1>Profile, User is {props.username} 
            <ChangeProfile setUserName={props.setUserName}/>
        </h1>
        </div>
  )
}

export default Profile