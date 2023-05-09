import React from "react";

export interface CustomInput {
    placeholder: string;
    type: string
}
const CustomInput: React.FC<CustomInput> = (props)=> {
    const {placeholder , type } = props;
    return <input className={'bg-black border border-white px-1'} type="text" placeholder={placeholder}/>



}
export default CustomInput