import  jwt  from "jsonwebtoken"

const generarToken = (correo,contrasena) => {
    return new Promise((resolve, reject) => {
        const payload={correo,contrasena};
        jwt.sign(payload,process.env.SECRETOR_KEY,{
            expiresIn: '1h'
        },(err, token)=>{
             if(err){
                reject('No se genero el Token.')
             }else{
                resolve(token);
             }
        })

    })
}
export  {generarToken};