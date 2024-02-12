
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-200'>
        <div className=' flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='text-4xl font-extrabold tracking-normal'>Auth App</h1>
            </Link>
            <ul className='flex gap-4'>
            <Link to='/' className='text-xl'><li>Home</li></Link>
            <Link to='/about' className='text-xl'> <li>About</li></Link>
            <Link to='/sign-in' className='text-xl'>  <li>Sign In</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header