import React from 'react'
import { useState } from 'react'
import Stars from './Stars';

function Rating({select}) {
    const [selected, setSelected] = useState(5);

    const handleChange = (e) =>{
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }

    return (
        <>
        <div className="form-check">
            <input 
                type = 'radio'
                    id = '1-star'
                    name = "rating"
                    value = '1'
                    onChange = {handleChange}
                    checked = {selected === 1}
                />
            <label htmlFor = '1-star'><Stars number = {1}/></label>
        </div>
        <div className="form-check">
            <input 
                type = 'radio'
                    id = '2-star'
                    name = "rating"
                    value = '2'
                    onChange = {handleChange}
                    checked = {selected === 2}
                />
            <label htmlFor = '2-star'><Stars number = {2}/></label>
        </div><div className="form-check">
            <input 
                type = 'radio'
                    id = '3-star'
                    name = "rating"
                    value = '3'
                    onChange = {handleChange}
                    checked = {selected === 3}
                />
            <label htmlFor = '3-star'><Stars number = {3}/></label>
        </div><div className="form-check">
            <input 
                type = 'radio'
                    id = '4-star'
                    name = "rating"
                    value = '4'
                    onChange = {handleChange}
                    checked = {selected === 4}
                />
            <label htmlFor = '4-star'><Stars number = {4}/></label>
        </div><div className="form-check">
            <input 
                type = 'radio'
                    id = '5-star'
                    name = "rating"
                    value = '5'
                    onChange = {handleChange}
                    checked = {selected === 5}
                />
            <label htmlFor = '5-star'><Stars number = {5}/></label>
        </div>
        </>
    )
}

export default Rating