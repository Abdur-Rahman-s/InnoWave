import React from 'react'

export const IncidentsCard = ({Image , title , description} ) => {

    return (
        <div>
            <div  >
                <div>
                    <img src={Image} alt="Frame" className=' h-[54px] w-[54px] '  />
                </div>
                <div  >
                    <h1 >{title}</h1>
                    <p  >{description}</p>
                </div>
            </div>
        </div>
    )
}
