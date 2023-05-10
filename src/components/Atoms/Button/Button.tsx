import React from "react";


export interface Button {
        buttonMin : string
}

const Button: React.FC<Button> = (props)=> {
    const { buttonMin } = props;
    return <div className={'mx-8 px-12 py-3'}>
        <button className={'bg-gray-200 w-1/6 h-12 text-red-600 hover:bg-black hover:text-gray-300'}>
            {buttonMin}
        </button>
    </div>

}

export default Button