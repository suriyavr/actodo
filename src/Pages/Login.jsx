import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [enteredUserName, setEnteredUserName] = useState();
  const [enteredPasswored, setEnteredPasswored] = useState();
  const [registerUser, setRegisteredUser] = useState(true);
  const users = props.user;
  const navigate = useNavigate()

  function hanldleUserNameInput(evt) {
    setEnteredUserName(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setEnteredPasswored(evt.target.value);
  }
  function checkUser() {

    var userfound = false;
    console.log(users, enteredUserName, enteredPasswored);
    users.forEach(function (item) {
      if (item.userName === enteredUserName && item.password === enteredPasswored) {
        console.log("login successfull");
        userfound = true;
        navigate("/Landing",{state : {userName : enteredUserName}})

      } 
    })

    if(userfound === false){
        console.log("login Failed")
         setRegisteredUser(false)
    }
  }
  return (
    <>
      <div>
        <div className="bg-black p-10">
          <div className="bg-[#EFEFEF] p-1 border rounder-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {registerUser ? (
              <p>I will help you manage your account, after you login</p>
            ) : (
              <p className="text-red-600">Please signup before you login</p>
            )}
            <div className="flex flex-col gap-2 my-2">
              <input
                type="text"
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Username"
                onChange={hanldleUserNameInput}
              />
              <input
                type="password"
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Password"
                onChange={handlePasswordInput}
              />

              <button
                className="bg-[#8272DA] w-24 p-1 rounded-md"
                onClick={checkUser}
              >
                Login
              </button>
              <p>
                Don't Have an account ?{" "}
                <Link to={"/signup"} className="underline">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
