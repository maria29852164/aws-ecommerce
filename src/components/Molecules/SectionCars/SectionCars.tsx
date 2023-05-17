import React from "react";
import ImgCars from "@/components/Atoms/ImgCars/ImgCars";
import TextCars from "@/components/Atoms/TextCars/TextCars";
import ButtonCars from "@/components/Atoms/ButtonCars/ButtonCars";


const SectionCars = ()=> {
    return <div className={'flex flex-row justify-evenly items-stretch'}>
        <div className={'w-1/2'}>
            <TextCars></TextCars>

            <ButtonCars></ButtonCars>
        </div>
        <div>
            <ImgCars></ImgCars>
        </div>

    </div>
}

export default SectionCars