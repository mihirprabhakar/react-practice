import React, { useState } from "react";

function OTPGenerator() {
  const [otp,setOtp]=useState("_ _ _ _ _ _");

  const generateOTP=()=>{
    const newOtp=Math.floor(100000 + Math.random() * 900000);
    setOtp(newOtp);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>OTP Generator</h2>

      <button onClick={generateOTP}>Generate OTP</button>

      {otp&&(
        <div style={{ marginTop: "20px" }}>
          <h3>Your OTP:</h3>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            {otp}
          </p>
        </div>
      )}
    </div>
  );
}

export default OTPGenerator;