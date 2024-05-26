import { Link } from 'react-router-dom'
import React from 'react'

const Profile = (): React.ReactNode => {
  return (
        <div>
            <Link to={'/'}>Main</Link>
            <div>
                This is Profile
            </div>
        </div>
  )
}

export default Profile
