import { useEffect, useState , useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import 'remixicon/fonts/remixicon.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = ({ phone }) => {
  const [open, setOpen] = useState(false);
  const { user , setUser , loading , fetchUser} = useAuth();
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null)
  
  const handleLogout = async () =>{
    try{
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user/logout`,{},{
        withCredentials: true
      })

      setUser(null);
      setOpenProfile(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    const handleClickOutside = () => setOpenProfile(false);

    if (openProfile) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [openProfile]);

  const handleAvatarChange = async (file) => {
    if (!file) return;
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      await axios.post(`${import.meta.env.VITE_API_URL}/api/post/upload-avatar`, formData, {
        withCredentials: true,
      });
      await fetchUser();
      setPreview(null);
    } catch (err) {
      console.log(err.message);
      
    }
  }

  const handleAvatarRemove = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/post/delete-avatar`, {}, {
        withCredentials: true,
      });
      await fetchUser();
      setOpenProfile(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  if (loading) return null;
  console.log(user);
  
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#140f23] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-yellow-400 text-lg md:text-xl font-bold">
          O² FITNESS GYM
        </h1>

        <ul className="desktop-menu hidden md:flex space-x-8 text-gray-300">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About US</Link></li>
          <li><Link to="/membership" className="hover:text-yellow-400">Membership</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        <a href={`https://wa.me/${phone}`} target="_blank"
          className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold">
          JOIN NOW
        </a>

        <button onClick={() => setOpen(!open)}
          className="menu-btn md:hidden text-yellow-400 text-2xl">
          ☰
        </button>
        
        {user? (
          <div className="relative">
            <div onClick={(e) => { e.stopPropagation(); setOpenProfile(!openProfile)}} className="flex items-center gap-2 cursor-pointer text-white">
            <img src={ preview || user?.avatar} alt="profile" className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400" />
            {/* <span className="hover:text-yellow-400 cursor-pointer uppercase text-white text-lg">{user.userName}</span> */}
          </div>

          {/* //drop down menu */}
          <input type="file" accept="image/*" ref={fileInputRef} style={{display : "none"}} onChange={(e) => handleAvatarChange(e.target.files[0])} />
        {openProfile && (
          <div className="absolute right-0 mt-2 w-40 bg-[#1c1630] rounded-lg shadow-lg p-3">
          <p className="text-gray-300 border-b pb-2 uppercase text-sm font-semibold">
            {user.userName}
          </p>
          <hr className="my-2" />
          <button onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click()
          }} className="w-full text-left text-gray-300 hover:text-yellow-400 flex items-center gap-2 cursor-pointer">
            Change Avatar <i className="ri-image-edit-line"></i>
          </button>
          <hr className="my-2 border-gray-600" />

          {/* REMOVE BUTTON HERE */}
          <button onClick={(e) => {
            e.stopPropagation();
            handleAvatarRemove(); 
          }
          } className="w-full text-left text-gray-300 hover:text-yellow-400 flex items-center gap-2 cursor-pointer">
            Remove Avatar <i className="ri-delete-bin-line"></i>
          </button>

          <hr className="my-2 border-gray-600" />

          <button onClick={handleLogout} className="mt-2 w-full text-left text-red-400 hover:text-red-500 cursor-pointer flex items-center gap-2">
            Logout <i className="ri-logout-circle-line"></i>
          </button>

          </div>
        )}
          </div>
    ) : ( 
      <div onClick={() => navigate("/login")}>
          <p><Link to="/login" className="hover:text-yellow-400 text-white text-4xl"><i className="ri-login-circle-line"></i></Link></p>
        </div> 
        )}
    </div>

      {open && (
        <div className="md:hidden bg-[#140f23] text-center text-white py-6 space-y-4">

          <Link to="/" className="block hover:text-yellow-400">
            Home
          </Link>

          <Link to="/about" className="block hover:text-yellow-400">
            About US
          </Link>

          <Link to="/membership" className="block hover:text-yellow-400">
            Membership
          </Link>

          <Link to="/contact" className="block hover:text-yellow-400">
            Contact
          </Link>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            className="block bg-yellow-400 text-black mx-10 py-3 rounded-full font-semibold"
          >
            JOIN NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;