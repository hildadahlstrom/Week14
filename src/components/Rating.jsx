import React from 'react'
import { useState } from 'react'
import Stars from './Stars';

function Rating({rating}) {
    const [selected, setSelected] = useState(1);

    const handleChange = (e) =>{
        setSelected(+e.currentTarget.value);
        rating =  (+e.currentTarget.value);
    }


    return (
        <ul className="rating">
            <li key = 'rating-1'>
                <input 
                    type = 'radio'
                    id = '1-star'
                    value = {1}
                    onChange = {handleChange}
                    checked = {selected === 1}
                    />
                <label htmlFor = '1-star'><Stars number = {1}/></label>
            </li>
            <li key = 'rating-2'>
                <input 
                    type = 'radio'
                    id = '2-star'
                    value = {2}
                    onChange = {handleChange}
                    checked = {selected === 2}
                    />
                <label htmlFor = '2-star'><Stars number = {2}/></label>
            </li>
            <li key = 'rating-3'>
                <input 
                    type = 'radio'
                    id = '3-star'
                    value = {3}
                    onChange = {handleChange}
                    checked = {selected === 3}
                    />
                <label htmlFor = '3-star'><Stars number = {3}/></label>
            </li>
            <li key = 'rating-4'>
                <input 
                    type = 'radio'
                    id = '4-star'
                    value = {4}
                    onChange = {handleChange}
                    checked = {selected === 4}
                    />
                <label htmlFor = '4-star'><Stars number = {4}/></label>
            </li>
            <li key = 'rating-5'>
                <input 
                    type = 'radio'
                    id = '5-star'
                    value = {5}
                    onChange = {handleChange}
                    checked = {selected === 5}
                    />
                <label htmlFor = '5-star'><Stars number = {5}/></label>
            </li>

        </ul>
    )
}

export default Rating