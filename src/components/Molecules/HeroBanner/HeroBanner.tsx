import React from "react";
import TextHero from "@/components/Atoms/TextHero/TextHero";
import Button from "@/components/Atoms/Button/Button";
import ImageHero from "@/components/Atoms/ImageHero/ImageHero";


const HeroBanner = ()=> {
    return <div>
        <div className={'absolute'}>
            <ImageHero></ImageHero>

        </div>
        <div className={'relative'}>
            <div>
                <TextHero tittle={'PRODUCTOS NUEVOS !'} description={'25% en descuento en la ultima linea'}></TextHero>
            </div>
            <div>
                <Button buttonMin={' PRESIONA AHORA!!'}></Button>
            </div>
        </div>
    </div>
}

export default HeroBanner