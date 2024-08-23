import axios from "axios"



const getMe=async()=>{
    const token =localStorage.getItem('token')
    try {
        const response=await axios.get("http://localhost:9000/me",
           { headers:{
            Authorization:`Bearer ${token}`

            }}
        )
        return response.data
    } catch (error) {
        console.log("failed to fetch user data",error)
        return null
    }
}
export default getMe