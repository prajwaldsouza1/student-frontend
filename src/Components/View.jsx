import React,{useEffect,useState,} from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';


export default function View() {

  const host="http://127.0.0.1:5000"

  const[display,setDisplay]=useState([])
  const[delete_id,setDelete_id]=useState("")


  let nav=useNavigate()

  //insert data to database

  useEffect(()=>{
    if(localStorage.getItem('token')){
      Axios.get(`${host}/api/student/get_students`)
      .then((res)=>{
        console.log("get all student response :"+ JSON.stringify(res.data))
        setDisplay(res.data)
      
      })
      .catch((err)=>{
          console.log("error:"+err)
      })
    }
    else{
      nav('/login')
    }
    

  },[])

  

const Logout = ()=>{
  return (
  localStorage.removeItem("token"),
  nav('/login') 
  )
}


  // console.log(display)

//delete data in table


  const Delete=()=>{
    console.log(delete_id)

    Axios.delete(`${host}/api/student/delete_student/${delete_id}`)
  .then((response)=>{
    console.log("deleting student of id :"+delete_id)
    const newDisplay=display.filter((dis)=>{
      return dis._id !==delete_id
    })
   setDisplay(newDisplay)
  })
  .catch((err)=>{
      console.log("error:"+err)
  })
}

  

  return (
    <>
    <div>
     <link to='/' ></link>
     
<Link onClick={Logout} style={{marginLeft:"700px"}}>Logout</Link>
        <table border="1">
          <thead border="1">

            <tr>
            <th>SI no</th>
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            <th>address</th>
            <th>view</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {display.map((item,index)=>{
              return (
                <tr>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                
                <td><Link to={`/edit/${item._id}`}>
                  Edit
               
                  </Link></td>
                <td><Button variant="contained" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setDelete_id(item._id)}>Delete</Button></td>

            </tr>

              )

            })}
            </tbody>
            
           
        </table>
     
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content"> data
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Do You Want To Delete?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NO</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Delete}>YES</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}