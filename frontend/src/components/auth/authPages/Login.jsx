import { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../AuthForm'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const { fetchUser } = useAuth();
  const [error, setError] = useState("");
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <AuthForm
      title="Login"
      showEmail={false}
      buttonText="Login"
      footerText="Don't have an account yet? "
      footerLinkText="Sign Up"
      toggleFormLink={() => navigate("/create-account")}
      error={error}
      setError={setError}
      onSubmit = {async (data) =>{
        try {
              const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/login`,
                data,
                { withCredentials: true }
              )
              console.log(res.data.message);

              await fetchUser();

              if (res.data.success) {
                navigate("/")
              }
        }catch (error) {
              if (error.response) {
                setError(error.response.data.message || "An error occurred");
              }else {
                setError("Network error, please try again later");
              }
        }
      }}
    />
  )
}

export default Login