import React, {useState}  from 'react'
import axios from 'axios'


const  Register = () => {
    const [registerState, setRegisterState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errorState, setErrorState] = useState({})

    //handler functions
    const registerChangeHandler = (e) => {
        setRegisterState({
            ...registerState,
            [e.target.name]: e.target.value
        })
    }
    const registerSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users", registerState, {withCredentials: true})
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response.data)
                const {errors} = err.response.data;
                console.log(errors)
                const errObj = {}

                for(const [key,value] of Object.entries(errors)) {
                    console.log(errors[key])
                    errObj[key] = value;
                }
                console.log(errObj)
                setErrorState(errObj)
            })
    }
    return (
        <div>
            <div>

            </div>
            <div>
                <h1>Register</h1>
                <form onSubmit={registerSubmit}>
                    <p>
                        Name:
                        <input type="text" name="name" onChange={registerChangeHandler} />
                        {(errorState.name) ? <small>{errorState.name.message}</small> : null}
                    </p>
                    <p>
                        Email:
                        <input type="text" name="email" onChange={registerChangeHandler} />
                        {(errorState.email) ? <small>{errorState.email.message}</small> : null}
                        {(errorState.duplicate) ? <small>Email Exists</small> : null}
                    </p>
                    <p>
                        Password:
                        <input type="text" name="password" onChange={registerChangeHandler}/>
                        {(errorState.password) ? <small>{errorState.password.message}</small> : null}
                    </p>
                    <p>
                        Confirm Password:
                        <input type="text" name="confirmPassword" onChange={registerChangeHandler} />
                        {(errorState.confirmPassword) ? <small>{errorState.confirmPassword.message}</small> : null}
                    </p>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register