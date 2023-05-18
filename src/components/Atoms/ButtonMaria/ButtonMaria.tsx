"use client"; // This is a client component 👈🏽

import React, {useEffect, useState} from "react";



export interface Button {
    buttonMin : string
}

const ButtonMaria: React.FC<Button> = (props)=> {
    const { buttonMin } = props;
    const [prendido, setPrendido] = useState(false);
    const functionParaBoton = ()=>{
        console.log('le dio click')
        setPrendido(!prendido)
    }
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/episode/3').then(res=>res.json())
            .then(data =>console.log(data))

    },[prendido])
    console.log('se renderizo el componente')
    return (
        <>

            <button onClick={functionParaBoton} className={'bg-blue-500 text-white p-4'}>gholaaa</button>

        </>
    )

}

export default ButtonMaria