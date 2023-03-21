import axios from "axios"

export const Register = (body) => {
    
    const res = axios.post(` ${process.env.REACT_APP_BACKEND_ENDPOINT}/user/Register`, body)
    return res
}

export const login = (body) => {
    
    const ress = axios.post(` ${process.env.REACT_APP_BACKEND_ENDPOINT}/user/login`, body)
    return ress
} 

export const userUpload=(body) => {
    const uplode = axios.post(` ${process.env.REACT_APP_BACKEND_ENDPOINT}/product`, body)
    return uplode
}

export const fileUpload=(body) => {
    const pdt = axios.post(` ${process.env.REACT_APP_BACKEND_ENDPOINT}/file/upload`, body)
    return pdt
}

export const GetUserData =async() => {
    const Getdata =await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product `)
    return Getdata
}

export const  DeleteProductData =async(id) => {
    const Deletedata =await axios.delete(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product/${id}`);
    return Deletedata
}