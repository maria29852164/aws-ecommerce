import React from "react";
import ItemLink from "@/components/Atoms/Itemlink/Itemlink";
import Logo from "@/components/Atoms/Logo/Logo";



const Navbar = ()=> {
    return(<div className={'flex flex-row justify-evenly items-stretch pt-4'}>
            <div className={'flex flex-row'}><Logo></Logo></div>
            <div className={'flex flex-row justify-evenly'}>
                <div className={'flex flex-row mt-4'}>
                    <ItemLink redirectTo={'HELMETS'} text={'HELMETS'}></ItemLink>
                    <ItemLink redirectTo={'GEAR'} text={'GEAR'}></ItemLink>
                    <ItemLink redirectTo={'PARTS'} text={'PARTS'}></ItemLink>
                    <ItemLink redirectTo={'APPAREL'} text={'APPAREL'}></ItemLink>
                    <ItemLink redirectTo={'OUTLET'} text={'OUTLET'}></ItemLink>
                </div>
            </div>
        </div>
    )

}
export default Navbar