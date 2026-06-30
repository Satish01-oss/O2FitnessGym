import { useState } from 'react';
import'remixicon/fonts/remixicon.css'
import {
  useGoogleLogin
} from '@react-oauth/google'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AuthForm = ({
  title,
  showEmail,
  buttonText,
  footerText,
  footerLinkText,
  toggleFormLink,
  onSubmit,
  error,
  setError
}) => {
  
  // const [error, setError] = useState("");
  const { fetchUser } = useAuth();

  const navigate = useNavigate();
    const googleLogin = useGoogleLogin({

      flow: 'implicit',
      
      onSuccess: async (tokenResponse) => {
        
        
      try {

        const response = await axios.post(

          `${import.meta.env.VITE_API_URL}/api/user/google`,

          {

            access_token:
              tokenResponse.access_token

          },
          {
            withCredentials: true
          }
        )

        await fetchUser();
        navigate('/')

      } catch (err) {

        console.log(err)

      }
    },

    onError: () => {

      console.log(
        'Google Login Failed'
      )

    }

  })

  return (
    <div className='main'>
      <form action="" onSubmit={(e) => {
      e.preventDefault();
      // Handle form submission logic here (e.g., API call)

      const formData = new FormData(e.target);

      const data = {
        userName: formData.get('userName'),
        password: formData.get('password')
      }
      if (showEmail){
        data.email = formData.get('email');
      }
      console.log(data);
      onSubmit(data);
    }}>
        <i className="ri-account-circle-2-line"></i>
        <h1>{title}</h1>
        <div className='content'>
            <input type="userName" name='userName' placeholder='Username' required/>
            {showEmail && (<input type="email" name='email' placeholder='Email' required/> 
          )}
            <input type="password" name='password' placeholder='Password' required />
            <button type="submit">{buttonText}</button>

            <div className="flex items-center gap-4 py-1">

              <div className="flex-1 h-px bg-gray-700" />

              <span className="text-sm text-gray-500">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-700" />

            </div>


            <button
              type="button"

              onClick={() => googleLogin()}

              className={`w-full h-14 rounded-2xl border flex items-center justify-center gap-4 font-medium transition-all `}
            >

              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />

              Google Login

            </button>
        </div>

        {setError && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}

        <p>{footerText} <span onClick={toggleFormLink}>{footerLinkText}.</span></p>
      </form>

    </div>
  )
}

export default AuthForm