import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setuser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState('')
  const [userData,setUserData]=useContext(AuthContext)


  useEffect(() => {//short notes
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setuser(userData.role)
      setloggedInUserData(userData.data)
    }
    // if(authData){
    //   const loggedInUser=JSON.parse(localStorage.getItem("loggedInUser"))
    //   if(loggedInUser){
    //     setuser(loggedInUser.role)
    //   }
    // }
  }, [])//[authData])
  


  const handleLogin = (email,password) => {
    if(email == 'admin@example.com' && password=='123'){
      setuser('admin')
      //ye neeche waala line imp hai
      //localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }))
    }else if(userData){
      const employee=userData.find((e) => email==e.email && e.password==password);
      if(employee){
      setuser('employee')
      setloggedInUserData(employee)
      //ye neeche waala line imp hai
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }else{
      alert("invalid credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setuser}/> : (user=='employee' ? <EmployeeDashboard changeUser={setuser} data={loggedInUserData}/> : null)}
      {/*<EmployeeDashboard />*/}
      {/*<AdminDashboard />*/}
      
      
    </>
  )
}

export default App