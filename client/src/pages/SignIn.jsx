import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"

function SignIn() {

  const [formData, setformData] = useState({});
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  //const navigate = useNavigate();
  const handleChange =(e)=>{
    setformData({ ...formData,[e.target.id]:e.target.value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setloading(true);
      seterror(false);
      const res = await fetch('/api/auth/signin' ,{
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
      navigate('/');
      
    }catch(error){
       setloading(false);
       seterror(true);
    }
  };

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-bold mt-16'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-8'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-4 rounded-xl'onChange={handleChange} />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-4 rounded-xl'onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-4 rounded-xl uppercase hover:opacity-95 disabled:opacity-70 text-l font-semibold'>{loading ?'Loading...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-3 mt-2'>
        <p> Dont Have an account?</p>
        <Link to='/sign-up'>
        <span className='text-blue-500' >Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5 text-xl">{error && 'Something went wrong !'}</p>
    </div>
  )
}

export default SignIn