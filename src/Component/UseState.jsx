import React, { useState } from 'react'

const UseState = () => {

    const [Name, setname] = useState("")
    const [Email, setemail] = useState("")
    const [Password, setpassword] = useState("")
    const [Cpassword, setcpassword] = useState("")

        const[Value,setvalue]=useState([])

        const addvalues = ()=>{
            setvalue([...Value,Name,Email,Password,Cpassword])
              
            document.getElementById("Name").value = ""
            document.getElementById("Email").value = ""
            document.getElementById("Password").value = ""
            document.getElementById("Cpassword").value = ""
        }
        console.log(Value)

  return (
    <div>
        <div className="inputfields">
          <input type="text"  id="Name"     placeholder='Enter your name' onChange={(e)=>{setname(e.target.value)}}/> <br />
          <input type="email"      id="Email"    placeholder='Enter your email'     onChange={(e)=>{setemail(e.target.value)}}/> <br />
          <input type="password"   id="Password" placeholder='Enter your Password'  onChange={(e)=>{setpassword(e.target.value)}}/> <br />
          <input type="password"   id="Cpassword"placeholder='Re-Enter your Password' onChange={(e)=>{setcpassword(e.target.value)}}/> <br />
          <button onClick={addvalues}>Submit</button>
          </div>00
    </div>
  )
}

export default UseState
