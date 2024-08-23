import axios from "axios"



const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:9000/login", { email, password })
        const {token} = response.data
        localStorage.setItem('token', token)
        window.location.href = '/'
    } catch (error) {
        console.log("login failed", error.response.data.message)
        alert("login failed ,please check your credentials")
    }
}
export default login