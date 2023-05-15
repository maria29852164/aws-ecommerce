import React from "react";
import TextHero from "@/components/Atoms/TextHero/TextHero";
import Button from "@/components/Atoms/Button/Button";
import ImageHero from "@/components/Atoms/ImageHero/ImageHero";


const HeroBanner = ()=> {
    return <div className={'pb-20'}>
        <div className={'absolute'}>
            <ImageHero></ImageHero>

        </div>
        <div className={'relative'}>
            <div className={'text-gray-200 pt-16 px-8 mt-12 pb-20'}>
                <TextHero tittle={'PRODUCTOS NUEVOS !'} description={'25% en descuento en la ultima linea'}></TextHero>
            </div>
            <div className={'mx-8 px-12 py-3'}>
                <Button buttonMin={' PRESIONA AHORA!!'}></Button>
            </div>
        </div>
    </div>
}

export default HeroBanner