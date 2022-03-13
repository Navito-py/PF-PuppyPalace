import React from 'react';
import './Paginate.css';

export default function Paginate({elementsPerPage, allElements, paginate}) {

    const pagenumbers = []

    for(let i = 0; i < Math.ceil(allElements/elementsPerPage); i++){
        pagenumbers.push(i + 1)
    }

    return (
        <div className='paginate'>
            {
                pagenumbers?.map((e,index) => {
                    return (
                        <button className='btn-paginated' key={index}onClick={() => paginate(e)}>{e}</button>
                    )
                })
            }
        </div>
    )
}
