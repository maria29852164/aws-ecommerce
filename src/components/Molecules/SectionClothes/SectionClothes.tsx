import React from "react";
import TextClothes from "@/components/Atoms/TextClothes/TextClothes";
import ButtonClothes from "@/components/Atoms/ButtonClothes/ButtonClothes";
import ImgClothes from "@/components/Atoms/ImgClothes/ImgClothes";


const SectionClothes = ()=> {
    return <div className={'flex flex-row justify-evenly items-stretch'}>
        <div className={'w-1/2'}>
            <ImgClothes></ImgClothes>
        </div>
        <div>
            <TextClothes></TextClothes>

            <ButtonClothes></ButtonClothes>
        </div>
    </div>
}

export default SectionClothes