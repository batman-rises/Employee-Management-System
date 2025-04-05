import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const  submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)//imp
        setemail("")
        setpassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col justify-center items-center'>
                <input 

                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }
                }
                
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='enter your email' 
                />
                <input 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5  placeholder:text-gray-400 mt-3' type="password" placeholder='enter your password' />
                <button className='text-white border-none outline-none border-2 bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white mt-3'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login