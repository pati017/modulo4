import  jwt  from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

const generarToken = (correo,contrasena) => {
    return new Promise((resolve, reject) => {
        const payload={correo,contrasena};
        console.log(process.env.KEY_SECRET)
        jwt.sign(payload,process.env.KEY_SECRET,{
            expiresIn: '1h'
        },(err, token)=>{
             if(err){
                console.log(err)
                reject('No se genero el Token.')
             }else{
                resolve(token);
             }
        })

    })
}
export  {generarToken};