import AuthForm from '../AuthForm'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

const CreateAccount = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("")
   useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <AuthForm
        title="Sign Up"
        showEmail = {true}
        buttonText="Sign Up"
        footerText="Already have an account?"
        footerLinkText="Login"
        toggleFormLink={() => navigate("/login")}
        error={error}
        setError = {setError}
        onSubmit = {async (data) =>{
          try {
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`,
                  data , {
                    withCredentials: true
                  } )

                console.log(res.data);

                  navigate("/verify-otp" , { state: { email: data.email } })
                
          } catch (error) {
            if(error.response) {
              setError(error.response.data.message);
            }else {
              setError("Network error, please try again later");
            }
          }
        }}
    />
  )
}

export default CreateAccount