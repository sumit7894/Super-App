import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Form.module.css";

const SignupForm = () => {
    const [formValues,setFormValues] = useState({
        check: false,
        name:" ",
        username:"",
        mail:"",
        mobile:"",
    });
    const Navigate = useNavigate();
    const[nameError,setNameError] = useState(false);
    const[userNameError,setUserNameError] = useState(false);
    const[emailError,setEmailError] = useState(false);
    const[mobileError,setMobileError] = useState(false);
    const[checkBoxError,setCheckBoxError] = useState(false);

    const handleChange =(e)=>{
        setFormValues({...formValues,[e.target.name]: e.target.value});
    };
    function handleSubmit(e){
        let valid = true;
        if(!(formValues.name.trim().length > 0)){
            setNameError(true);
            valid =false;
        }else{
            setNameError(false);
        }
        if(!(formValues.username.trim().length > 0)){
            setUserNameError(true);
            valid = false;
        }else{
            setUserNameError(false);
        }
        if(!(formValues.mail.trim().length> 0)){
            setEmailError(true);
            valid = false;
        }else{
            setEmailError(false);
        }
        if(!(formValues.mobile.trim().length > 0)){
            setMobileError(true);
            valid = false;
        }else{
            setMobileError(false);
        }
        if(!(formValues.check)){
            setCheckBoxError(true);
            valid = false;
        }else{
            setCheckBoxError(false);
        }
        if (valid) {
            window.localStorage.setItem("userData", JSON.stringify(formValues));
            Navigate("/genre");
          }
    }
  return (
    <div className={styles.form}>
       <div className={styles.logo}>
                Super app
            </div>
            <div className={styles.formHeading}>
                Create a new account
            </div>
                <div className={styles.formDivContainer}>
                <div className={styles.formDiv}>
                    <form onSubmit={(e)=>(e.preventDefault())}>
                        <input 
                        style={{borderColor: nameError ? 'red':'black'}}
                        type='text' placeholder='Name' name='name'
                        onChange={(e)=>handleChange(e)}
                        /> <br/>
                        <label style={{visibility: nameError ? "visible": "hidden" }}>Field is required</label><br/>
                        <input
                        style={{borderColor: userNameError ? 'red':'black'}}
                        type='text' placeholder='UserName' name='username'
                        onChange={(e)=>handleChange(e)}
                        /><br/>
                        <label style={{visibility: userNameError ? "visible": "hidden" }}>Field is required</label><br/>
                        <input
                        style={{borderColor: emailError ? 'red':'black'}}
                        type='email' placeholder='Email' name='mail'
                        onChange={(e)=>handleChange(e)}
                        /><br/>
                        <label style={{visibility: emailError ? "visible": "hidden" }}>Field is required</label><br/>
                        <input
                        style={{borderColor: mobileError ? 'red':'black'}}
                        type='tel' placeholder='Mobile' name='mobile'
                        onChange={(e)=>handleChange(e)}
                        /><br/>
                        <label style={{visibility: mobileError ? "visible": "hidden" }}>Field is required</label><br/>
                        <div className={styles.checkBoxDiv}>
                        <input type='checkbox' 
                        className={styles.checkbox}
                        name='check'
                        onChange={(e)=>
                            handleChange(e)
                        }
                        />
                        Share my registration data with Superapp
                        </div>
                        <label style={{visibility: checkBoxError ? "visible": "hidden" }}>Check this box if you want to proceed</label><br/>
                        <button className={styles.signupBtn}
                        onClick={handleSubmit}
                        >SIGN UP</button>
                    </form>
                    <p>
                        By clicking on Sign up. you agree to Superapp  
                        <span style={{color:"#72DB73"}}>Terms and Conditions of Use </span>
                        </p>
                        <p>
                        To learn more about how Superapp collects, uses, shares and protects
                        your personal data please head Superapp<span style={{color:"#72DB73"}}> Privacy Policy 
                        </span>
                    </p>
                </div>
            </div>
    </div>
  )
}

export default SignupForm