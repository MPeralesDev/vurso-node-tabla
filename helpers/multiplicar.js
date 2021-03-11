const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10)=>{
    try{
        let linea = '';
        let lineaColor= '';
        for(let i=0;i<=hasta;i++){
            linea += `${base} X ${i} = ${base*i}\n`;
            lineaColor += `${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        
        if(listar){
            console.log(lineaColor); 
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, linea);
        return `tabla-${base}.txt`.underline.red; 

    }catch(error){
        throw error;
    }
    
    
}

module.exports = {
    crearArchivo
}