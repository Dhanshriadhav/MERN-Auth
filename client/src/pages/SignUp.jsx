import {Link} from "react-router-dom"
import { useState } from "react"

function SignUp() {

  const [formData, setformData] = useState({});
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const handleChange =(e)=>{
    setformData({ ...formData,[e.target.id]:e.target.value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setloading(true);
      seterror(false);
      const res = await fetch('/api/auth/signup' ,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setloading(false);
      if (data.success === false){
        seterror(true);
        return;
      }
      
    }catch(error){
       setloading(false);
       seterror(true);
    }
  };

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-bold mt-12'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-8'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-4 rounded-xl' onChange={handleChange} />
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-4 rounded-xl'onChange={handleChange} />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-4 rounded-xl'onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-4 rounded-xl uppercase hover:opacity-95 disabled:opacity-70 text-l font-semibold'>{loading ?'Loading...' : 'Sign Up'}</button>
      </form>
      <div className='flex gap-3 mt-2'>
        <p>Have an account ?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500' >Sign in</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5 text-xl">{error && 'Something went wrong !'}</p>
    </div>
  )
}

export default SignUp