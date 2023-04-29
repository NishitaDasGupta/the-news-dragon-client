import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'
import LeftEditorialInsight from '../LeftEditorialInsight/LeftEditorialInsight';

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
            <div>
            <h4 className='my-4' >All Caterogy</h4>
            <div >   
                {
                    categories.map(
                        category =>
                        <p key={category.id}>
                            <Link className='category-link text-decoration-none text-black' to={`/category/${category.id}`}>
                            {category.name}</Link>
                        </p>  
                        )
                }
            </div>
        </div>
       <LeftEditorialInsight></LeftEditorialInsight>
    </div>
    );
};

export default LeftNav;