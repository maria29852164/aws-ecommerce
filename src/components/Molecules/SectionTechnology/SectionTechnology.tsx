import React from "react";
import TextTechnology from "@/components/Atoms/TextTechnology/TextTechnology";
import ButtonTechnology from "@/components/Atoms/ButtonTechnology/ButtonTechnology";
import ImgTechnology from "@/components/Atoms/ImgTechnology/ImgTechnology";


const SectionTechnology = ()=> {
    return <div className={'flex flex-row justify-evenly items-stretch'}>
        <div className={'w-1/2'}>
            <TextTechnology></TextTechnology>
            <ButtonTechnology></ButtonTechnology>
        </div>
        <div>
            <ImgTechnology></ImgTechnology>
        </div>
    </div>
}
export default SectionTechnology