import axios from 'axios'
import React, { useEffect, useState , useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const VerifyOtp = () => {

    const [otp, setOtp] = useState(["" , "" , "" , ""])
    const inputRef = useRef([])

    const handleOtpChange = (e , index) =>{
        if (!/^[0-9]?$/.test(e)) return;

        const newOtp = [...otp]
        newOtp[index] = e
        setOtp(newOtp)

        if (e && index < 3) {
            inputRef.current[index + 1].focus()
        }
    }

    const handleKeyDown = (e , index) =>{
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus()
        }
    }

    useEffect(() => {
        inputRef.current[0].focus()
    }, [])

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        if (/^\d{4}$/.test(pastedText)) {
            const newOtp = pastedText.split('');
            setOtp(newOtp);
        }
    }
     const location = useLocation();
     const email = location.state?.email; // Access the email from the location state
     const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        console.log("Entered OTP:", enteredOtp);
        // Handle OTP verification logic here (e.g., API call)

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/verify/verify-otp`,
                {   
                    email,
                    otp: enteredOtp
                }
            )
            if (res.data.success) {
                console.log(res.data.message);
                navigate("/login")
            } else {
                alert("Invalid OTP")
            }
        } catch (error) {
            console.error("Error verifying OTP:", error)
            alert("An error occurred while verifying the OTP")
        }

    }
  return (
    <div className='main'>
        <form onSubmit={handleSubmit} onPaste={handlePaste}>
           <h1>Verify OTP</h1>

           <div className='otp-container'>
            {otp.map((value , index) => (
                <input key={index} type="text" maxLength="1" value={value} ref={(el) => (inputRef.current[index] = el)} onChange={(e) => handleOtpChange(e.target.value , index)} onKeyDown={(e) => handleKeyDown(e , index)} />
            ))}
           </div>

           <button type="submit">Verify OTP</button>
        </form>
    </div>
  )
}

export default VerifyOtp