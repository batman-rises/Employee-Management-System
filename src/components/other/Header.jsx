
import React from 'react'

const Header = ({ data, changeUser }) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('') // yahan pe mai logout kartw waqt user ko khali string me change kar diya so jab app.jsx me jab condition check
    //hote waqt khali string dikhegi to automatically login page khul jayega
    // optionally reload: window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hi <br />
        <span className='text-3xl font-semibold'>
          {data?.firstname || 'User'} 😃
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
