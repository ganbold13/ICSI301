"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';

interface IngredientData {
    idIngredient: string,
    strIngredient: string,
    strDescription: string
}

const Ingridient = () => {
    const pathName = usePathname();

    const [ingredients, setIngredients] = useState<IngredientData[]>([]);
    const name = pathName.slice(12); // /ingredient/

    console.log(name);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
                );
                setIngredients(response.data.ingredients);
                console.log(response.data.ingredients)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='p-4'>
            {ingredients && ingredients.map((ingredient) => (
                <div className='grid grid-cols-2 max-md:grid-cols-1' key={ingredient.idIngredient}>
                    <div className='flex flex-col p-4'>
                        <h1 className='text-3xl px-2 py-1'>
                            {ingredient.strIngredient}
                        </h1>
                        <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`} alt="" />
                    </div>

                    <div className='flex flex-col p-4'>
                        <h1 className='text-3xl px-2 py-1'>
                            Description
                        </h1>
                        {ingredient.strDescription}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ingridient;