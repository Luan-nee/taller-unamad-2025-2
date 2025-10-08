
export interface Enlaces{
    nombre:string,
    icono:string,
    enlace:string
}

export interface contenedorEnlaces{
    id?:string,
    titulo:string,
    descripcion:string,
    complementos:Array<Enlaces>,
    imagen?:string
}