import React from "react";
import CustomInput from "@/components/Atoms/CustomInput/CustomInput";
import ButtonSearch from "@/components/Atoms/ButtonSearch/ButtonSearch";


const Search = ()=> {
    return <div className={'flex flex-row bg-black py-2 justify-end'}>
        <div className={''}>
            <CustomInput placeholder={'Search'} type={'search'}></CustomInput>
        </div>
        <div className={'mt-0.5'}>
            <ButtonSearch></ButtonSearch>
        </div>

    </div>

}



export default Search