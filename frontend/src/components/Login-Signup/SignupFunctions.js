import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = "https://buss-app.onrender.com/register";
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
