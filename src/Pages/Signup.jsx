import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props){

    const users = props.user
    const setUsers = props.setUsers
    const [enteredUserName, setEnteredUserName] = useState();
    const [enteredPasswored, setEnteredPasswored] = useState();
    const navigate = useNavigate()
    function hanldleUserNameInput(evt) {
    setEnteredUserName(evt.target.value);
    }

   function handlePasswordInput(evt) {
    setEnteredPasswored(evt.target.value);
   }
   function addUser(){
       setUsers([...users, { userName: enteredUserName, password: enteredPasswored }])
       navigate("/")
   }
    return(
        <>
         <div>
            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-1 border rounded-md">
                    <h1 className="text-3xl font-medium">Hey Hi</h1>
                    <p>Sign Up Here</p>
                    <div className="flex flex-col gap-2 my-2">
                    <input 
                    type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Username" onChange={hanldleUserNameInput}/>
                    <input type="password" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Password" onChange={handlePasswordInput}/>
                    <input type="password" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Confirm Password"/>
                    <button className="bg-[#F39D09] w-24 p-1 rounded-md" onClick={addUser}>Sign UP</button>
                    <p>Already Have an account ? <Link to={"/"} className="underline">Login</Link></p>
                </div>
                </div>
               
            </div>
         </div>
        </>
    )
}

export default Signup;