import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
import { signInFailure,signInStart,signInSuccess } from "../redux/User/UserSlice";
import {  useDispatch, useSelector } from "react-redux";

function SignIn() {

  const [formData, setformData] = useState({});
  const {loading , error} = useSelector((state) =>state.user);
  console.log(loading,error );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const handleChange =(e)=>{
    setformData({ ...formData,[e.target.id]:e.target.value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin' ,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
      
    }catch(error){
       dispatch(signInFailure(error));
    }
  };

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-bold mt-16'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-8'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-4 rounded-xl'onChange={handleChange} />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-4 rounded-xl'onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-4 rounded-xl uppercase hover:opacity-95 disabled:opacity-70 text-xl '>{loading ?'Loading...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-3 mt-2'>
        <p> Dont Have an account?</p>
        <Link to='/sign-up'>
        <span className='text-blue-500' >Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5 text-xl">{error ? error.message || 'Something went wrong !' : " "}</p>
    </div>
  )
}

export default SignIn