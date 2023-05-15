import React from "react";
import TextInfo2 from "@/components/Atoms/TextInfo2/TextInfo2";
import ButtonInfo2 from "@/components/Atoms/ButtonInfo2/ButtonInfo2";
import ImgClothes from "@/components/Atoms/ImgClothes/ImgClothes";


const SectionInfo2 = ()=> {
    return <div className={'flex flex-row justify-evenly items-stretch'}>
        <div>
            <ImgClothes></ImgClothes>
        </div>
        <div>
            <TextInfo2></TextInfo2>

            <ButtonInfo2></ButtonInfo2>
        </div>
    </div>
}

export default SectionInfo2