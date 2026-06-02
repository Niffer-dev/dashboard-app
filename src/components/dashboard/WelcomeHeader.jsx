import React from 'react'
import { useUser } from '../../context/UserContext'

const WelcomeHeader = () => {
  const user = useUser()
  
  // Get the current date
  const today = new Date()
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Display username if available, otherwise fallback to other common user fields or a default
  const displayName =
    typeof user === "string"
      ? user
      : user?.username ||
        user?.userName ||
        user?.name ||
        user?.fullName ||
        [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
        user?.email ||
        "Guest";

  return (
    <div>
        <h2 className='text-gray-900 dark:text-white text-xl font-semibold'>Hello, {displayName}</h2>
        <p className='text-gray-500'>{dateString}</p>
    </div>
  )
}

export default WelcomeHeader