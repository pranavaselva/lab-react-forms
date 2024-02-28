import { useState } from "react";

function App(){

  const [FirstnameError, setFirstnameError] = useState(false);
  const [LastnameError, setLastnameError] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [WholeError, setWholeError] = useState(false);
  const [Success, SetSuccess] = useState(false);

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email:"",
    phoneno:"",
  })

  const handleChange = (event) => {
    const inputValue = event.target.value
    const inputField = event.target.name
    setState({...state, [inputField]: inputValue})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {firstname,lastname,email,phoneno} = state; 
    // destructuring of object

    if(email === "" || phoneno === "" || email.includes(" ")){
        setWholeError(true)
        return;
   }
   if(firstname === ""){
    return setFirstnameError(true)
   }
   if(lastname === ""){
    return setLastnameError(true)
   }
   if(phoneno.length !== 10){
    return setPhoneError(true)
   }
   if(!email.includes("@kalvium.community")){
    return setEmailError(true)
   }

   let symbols = './,<>:;[]{}-=+*!@#$%^&*()|~Ee';
   for(let i=0; i<10; i++){
    if(symbols.includes(phoneno[i])){
        return setPhoneError(true)
    }
   }

   let EmailName = email.split("@")[0];

   let smallCharacters = "abcdefghijklmnopqrstuvwxyz.";
   for(let i=0; i<EmailName.length; i++){
    if(!smallCharacters.includes(EmailName[i])){
        return setEmailError(true)
    }
   }
SetSuccess(true)

}



  return(
    
      <div className="container">
      <div className="main">
      <div>
      {Success === true ? (
        <div className="registration">
          <p>Registration Successfull</p>
        </div>
      ) : (
        ' '
      )}
      
  <form onSubmit={handleSubmit}>
  <div>
    <input id="inbox1" type="text" placeholder="First Name" name="firstname" onChange={handleChange}/>
    {
    FirstnameError === true ? (
        <p style={{ color: 'red', fontSize: '15px' }}>Do not keep FirstName empty!!</p>
    ) : ("")
    }
  </div>

  <div>
    <input id="inbox2" type="text" placeholder="Last Name" name="lastname" onChange={handleChange} />
    {
    LastnameError === true ? (
    <p style={{ color: 'red', fontSize: '15px' }}> Do not keep Lastname empty!!
    </p>
    ) : ("")
    }
  </div>

  <div>
    <input id="inbox3" type="email" placeholder="@kalvium.community" name="email" onChange={handleChange} />
    {EmailError === true ? (
            <p style={{ color: 'red', fontSize: '15px' }}>
              Enter correct format for email
            </p>
          ) : (
            ''
          )}
  </div>

  <div>
    <input id="inbox4" type="number" placeholder="Phone Number" name="phoneno" onChange={handleChange} maxLength={10}/>
    {PhoneError === true ? (
            <p style={{ color: 'red', fontSize: '15px' }}>
              Enter correct format for phone
            </p>
          ) : (
            ''
          )}
  </div>
    {
    WholeError === true ? (
    <p>Enter input fields correctly!!</p>
    ) : ("")
    }


  <input type="submit" />

  </form>



  </div>
  </div>

  </div>
    )
  }

export default App;