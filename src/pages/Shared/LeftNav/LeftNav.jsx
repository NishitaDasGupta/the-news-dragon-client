import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'
const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data =>setCategories(data))
            .catch(error => console.error(error))

    }, [])
    return (
        <div>
            <h4 className='my-4' >All Caterogy</h4>
            <div >   
                {
                    categories.map(
                        category =>
                        <p key={category.id}>
                            <Link className='category-link text-decoration-none text-black' to={`/categories/${category.id}`}>
                            {category.name}</Link>
                        </p>  
                        )
                }
            </div>
        </div>
    );
};

export default LeftNav;