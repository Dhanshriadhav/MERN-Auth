import {Link} from "react-router-dom"

function SignUp() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-bold mt-12'>Sign Up</h1>
      <form className='flex flex-col gap-5 mt-8'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-4 rounded-xl' />
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-4 rounded-xl' />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-4 rounded-xl' />
        <button className='bg-slate-700 text-white p-4 rounded-xl uppercase hover:opacity-95 disabled:opacity-70 text-l font-semibold'>Sign Up</button>
      </form>
      <div className='flex gap-3 mt-2'>
        <p>Have an account ?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500' >Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp