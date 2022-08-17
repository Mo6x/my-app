import { useState } from "react"
import "./App.css";
import FormInput from './components/Formlnput';

const App = () => {
  const [value, setValue] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text", 
      placeholder: "Username",
      label: "username" 
    },

     {
      id: 2,
      name: "email",
      type: "text", 
      placeholder: "Email",
      label: "Email" 
    },

      {
      id: 3,
      name: "birthday",
      type: "text", 
      placeholder: "Birthday",
      label: "Birthday" 
    },
      
       {
      id: 4,
      name: "password",
      type: "password", 
      placeholder: "Password",
      label: "Password" 
    },
       
        {
      id: 5,
      name: "confirmPassword",
      type: "password", 
      placeholder: "Confirm Password",
      label: "Confirm Password" 
    }
     
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} name="username" placeholder="Username" />
       ))}
        <button>Submit</button>
      </form>
    
    </div>
  );
};

export default App;
