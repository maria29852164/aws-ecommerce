import React from "react";
import Link from "next/link";
export interface ItemLink {
    text: string | React.ReactElement;
    redirectTo: string;
}

const ItemLink: React.FC<ItemLink> = (props)=>{
    const {redirectTo, text} = props;
        return <div>
            <Link className={'text-gray-700 font-light text-base pl-7 px-6 hover:text-gray-400 hover:border-b-2 pb-5 hover:border-b-black'} href={redirectTo}>{text}</Link>
        </div>
    }


export default ItemLink

