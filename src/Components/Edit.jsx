import React,{useEffect,useState,useContext} from 'react'
import { useParams,useSubmit,useNavigate, Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { joinPaths } from '@remix-run/router';
import Axios from 'axios';


export default function Insert() {
  let navigate=useNavigate('')

  const host="http://127.0.0.1:5000"

  let params=useParams()
  console.log(params)

  const [student,setStudent]=useState([])



  


  const onChange =(e)=>{
    console.log(e)
    setStudent({...student,[e.target.name]:e.target.value})
  }


  useEffect(()=>{
    Axios.get(`${host}/api/student/get_single/${params.id}`)
    .then((res)=>{
      console.log("single student response :"+JSON.stringify(res.data))
      setStudent(res.data)
    })
    .catch((err)=>{
        console.log("error:"+err)
  })
  
  
},[])


const onSubmit=(e)=>{
  e.preventDefault()
  const name=student.name
  const phone=student.phone
  const email=student.email
  const address=student.address

  Axios.put(`${host}/api/student/update_student/${params.id}`,{name,phone,email,address})
  .then((res)=>{
    console.log("update response :"+JSON.stringify(res.data))
   
  })
  .catch((err)=>{
      console.log("error:"+err)
})

navigate("/")


}



  return (
    <div>
        <center>
            <h1>Edit form</h1>
            Name<br/><br/>
           <input type="text" placeholder='Name' name="name" value={student.name} onChange={onChange}></input><br/><br/>

           Phone<br/><br/>
           <input type="text" placeholder='Name' name="phone"value={student.phone}></input><br/><br/>


           Email<br/><br/>
           <input type="text" placeholder='Email' name="email" value={student.email}></input><br/><br/>

           Address<br/><br/>
           <input type="text" placeholder='Address' name="address" value={student.address}></input><br/><br/>
           
           <Button variant="contained" onClick={onSubmit}>Update</Button>

            
        </center>
    </div>
  )
}

