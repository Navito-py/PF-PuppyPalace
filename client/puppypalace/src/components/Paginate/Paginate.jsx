import React from 'react'

export default function Paginate({elementsPerPage, allElements, paginate}) {

    const pagenumbers = []

    for(let i = 0; i < Math.ceil(allElements/elementsPerPage); i++){
        pagenumbers.push(i + 1)
    }

    return (
        <div>
            {
                pagenumbers?.map((e,index) => {
                    return (
                        <button key={index}onClick={() => paginate(e)}>{e}</button>
                    )
                })
            }
        </div>
    )
}
