
"use client";

import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { ChangeEvent, FormEvent, useState } from "react";
interface FormProps{
    fullname:string,
    email:string,
    message:string
}
export default function ContactmeForm() {
 
  const [formData,setFormData]=useState<FormProps>({
email:"",
fullname:"",
message:""
  })
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) =>{
    setError("")
    setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    console.log("Full name: ", formData.fullname);
    console.log("Email: ", formData.email);
    console.log("Message: ", formData.message);
    console.log("formdata",formData);
    if(!formData.fullname?.trim() || !formData.email?.trim() || !formData.message.trim()){
        setError("All fields are required")
        return
    } 
    try {
        const res = await fetch("api/message", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              fullname:formData.fullname,
              email:formData.email,
              message:formData.message
            }),
          });
          if(res.status===200){
            setSuccess("Message Send Successfully")
            setFormData({
                fullname:"",
                email:"",
                message:""
            })
          }else{
            setError("Message Sending Failed")
          }
    } catch (error:any) {
      console.error("An error occurred:", error);
    }
  

}

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >


        <div className="mt-4">
  <label htmlFor="fullname" className="block">Full Name </label>
  <input
    onChange={handleChange}
    name="fullname"
    type="text"
    id="fullname"
    // placeholder="John Doe"
    value={formData.fullname}
    className="mt-1 p-2 border text-[#121121] border-gray-300 rounded-md w-full"
  />
</div>

<div className="mt-4">
  <label htmlFor="email" className="block">Email </label>
  <input
    onChange={handleChange}
    name="email"
    type="text"
    id="email"
    value={formData.email}
    // placeholder="john@gmail.com"
    className="mt-1 p-2 border text-[#121121] border-gray-300 rounded-md w-full"
  />
</div>

<div className="mt-4">
  <label htmlFor="message" className="block">Your Message </label>
  <textarea
  name="message"
    onChange={handleChange}
    value={formData.message}
    className="mt-1 p-2 border text-[#121121] border-gray-300 rounded-md w-full h-32"
    id="message"
    placeholder="Type your message here..."
  ></textarea>
</div>
{error && <div className="text-red-600 text-lg flex items-center gap-2">
    <ExclamationTriangleIcon className="w-[2rem] h-[2rem]"/>
    {error}</div>}
    {success && <div className="text-green-600 text-lg flex items-center gap-2">
    <CheckCircleIcon className="w-[2rem] h-[2rem]"/>
    {success}</div>}
<button className="mt-4 gradient-bg p-3 text-white font-bold rounded-md" type="submit">
  Send
</button>

      </form>

      <div className="bg-slate-100 flex flex-col">

      </div>
    </>
  );
}