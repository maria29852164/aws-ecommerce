import React from "react";
import ImgCars from "@/components/Atoms/ImgCars/ImgCars";
import TextInfo from "@/components/Atoms/TextInfo/TextInfo";
import ButtonInfo from "@/components/Atoms/ButtonInfo/ButtonInfo";


const SectionInfo = ()=> {
    return <div className={'flex flex-row justify-evenly items-stretch'}>
        <div>
            <TextInfo></TextInfo>

            <ButtonInfo></ButtonInfo>
        </div>
        <div>
            <ImgCars></ImgCars>
        </div>

    </div>
}

export default SectionInfo