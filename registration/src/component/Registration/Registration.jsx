import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Registration() {
  const navigate = useNavigate()
  const [formData, setData] = useState({
    name: "",
    email: "",
    pass: "",
    c_pass: "",
    tc: "",
  });
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setData({
      ...formData,
      [name]: value
    })
  }
  const handleReset = (e)=>{
    
    setData({
        name: "",
        email: "",
        pass: "",
        c_pass: "",
        tc: "",
      })
  }



  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(formData)
    if(formData.pass !== formData.c_pass){

      alert("Password and Confirm Password should be same");
      return;

    }
    try{

       const response = await axios.post("http://localhost:3000/api/users/registration",formData);
       console.log(response.data.status)

    //    handle success
    if (response.data.status == "success") {

        navigate("/profile");
    }

    //    handle failed
    if (response.data.status == "failed") {
       console.log("first")
        alert(response.data.message)
    }



    }
    catch(err){
        console.log("There was an error!", err)
    }
      
  }
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name : </label>
            <input type="text" name="name" id="" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Email : </label>
            <input type="email" name="email" id="" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Password : </label>
            <input type="password" name="pass" id="" value={formData.pass} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Confirm Password : </label>
            <input type="password" name="c_pass" id="" value={formData.c_pass} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">TC : </label>
            <input type="text" name="tc" value={formData.tc} onChange={handleChange} />
          </div>
            {/* <input type="text" name="tc" id="" value={formData.tc} /> */}
          <button type="submit" >Sign Up</button>
          <button type="reset" onClick={handleReset}>Reset</button>
        </form>
      </div>
    </>
  );
}
