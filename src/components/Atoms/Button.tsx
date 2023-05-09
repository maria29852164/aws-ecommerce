import React from 'react';

interface ButtonProps {
    buttonName: string
}
 const Button: React.FC<ButtonProps> = (props)=>{

     return <button className={'bg-red-800 p-2 text-white rounded'} >{props.buttonName}</button>
 }


 export default  Button;