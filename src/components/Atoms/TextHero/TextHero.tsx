import React from "react";
import Button from "@/components/Atoms/Button/Button";


export interface TextHero {
    tittle: string | React.ReactElement;
    description: string
}

const TextHero: React.FC<TextHero> = (props)=> {
    const { tittle , description} = props
    return <div className={'text-gray-200 pt-16 px-8 mt-12'}>
        <h2 className={'font-bold text-7xl  px-8 py-3'}>{tittle}</h2>

        <p className={' font-light text-xl px-12'}>{description}</p>
    </div>
}

export default TextHero