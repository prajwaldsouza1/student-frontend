import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Insert() {



  const host = "http://127.0.0.1:5000"

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  //another method
  // const [user,setUser]=useState({name:"",email:"",address:""})

  // console.log(name)
  // console.log(email)
  // console.log(address)

  // const  Change=(e)=>{
  //   setUser({...user,[e.target.name]:e.target.value})
  // }

  const onSubmit = () => {
    // e.preventDefault();  this will be used when form
    console.log(name, phone, email, address)
    //host frontend to backend

    // Axios.get(`${host}/get`)
    // .then((response)=>{
    //   console.log(response.data)
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })

    Axios.post(`${host}/api/student/insert`, { name: name, phone: phone, email: email, address: address })
      .then((response) => {
        console.log("inserted Response :" + response)
        if (response.data) {
          console.log("inserted successsfully")
        }
        else {
          console.log("some error occured")
        } if (response.data) {
          console.log("inserted successsfully")
        }
        else {
          console.log("some error occured")
        }
      })
      .catch((err) => {
        console.log("error:" + err)
      })
  }

  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/login")
    }
  })









  return (
    <div>
      <center>
        <h1>Insert form</h1>
        Name<br /><br />
        <input type="text" placeholder='Name' name="name"
          onChange={(e) => setName(e.target.value)} />

        <br /><br />


        Phone<br /><br />
        <input type="text" placeholder='Phone'
          onChange={(e) => setPhone(e.target.value)} />
        <br /><br />


        Email<br /><br />
        <input type="text" placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        Address<br /><br />
        <input type="text" placeholder='Address'
          onChange={(e) => setAddress(e.target.value)} />
        <br /><br />

        <Button variant="contained" onClick={onSubmit}>submit</Button>


      </center>
    </div>
  )
}
