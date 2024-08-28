import axios from "axios"
import getMe from './GetMe'




export const updateProfil = async(body, id)=>{
    try {
        const token = localStorage.getItem('token')
        const res = await axios.put(`http://localhost:9000/updateme/${id}`, body,{ headers: {
            Authorization: 'Bearer '+ token
        }})
        const dataWithId = res.data.map((item, index) => ({
            ...item,
            id:item._id
          }));
          
        localStorage.setItem('token', dataWithId)
        getMe()
    } catch (error) {
        console.log(error)
    }
}
