import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
  const dispatch  = useDispatch()
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth app</h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <Link to="/sign-in">
            {currentUser ? (
              <Link to="/profile"><img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover"/></Link>
            ):(
                <li>Sign In</li>
            )}
            
          </Link>
        </ul>
        
      </div>
    </div>
  );
}
