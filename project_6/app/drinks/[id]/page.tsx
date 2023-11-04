"use client"

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';

interface CocktailData {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
}

const Cocktail = () => {
    const router = useRouter();
    const pathName = usePathname();

    const [cocktails, setCocktails] = useState<CocktailData[]>([]);
    const id = pathName.slice(8); // /drinks/

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                setCocktails(response.data.drinks);
                console.log(response.data.drinks)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='p-4'>
            {cocktails.map((cocktail) => (
                <div className='flex max-md:flex-col justify-between' key={cocktail.idDrink}>
                    <div className='flex flex-col p-4'>
                        <h1 className='text-3xl px-2 py-1'>
                            {cocktail.strDrink}
                        </h1>
                        <img className='rounded-lg m-2' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    </div>

                    <div className='p-4'>
                        <h1 className='text-3xl px-2 py-1'>
                            Ingredients
                        </h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='ingredient-item' onClick={() => {
                                router.push('/ingredient/' + cocktail.strIngredient1)
                            }}>
                                <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient1}-Medium.png`} alt="" />
                                <p>
                                    {cocktail.strMeasure1}
                                    <span> </span>
                                    {cocktail.strIngredient1}
                                </p>
                            </div>
                            <div className='ingredient-item' onClick={() => {
                                router.push('/ingredient/' + cocktail.strIngredient2)
                            }}>
                                <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient2}-Medium.png`} alt="" />
                                <p>
                                    {cocktail.strMeasure2}
                                    <span> </span>
                                    {cocktail.strIngredient2}
                                </p>
                            </div>
                            {
                                cocktail.strIngredient3 && <div className='ingredient-item' onClick={() => {
                                    router.push('/ingredient/' + cocktail.strIngredient3)
                                }}>
                                    <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient3}-Medium.png`} alt="" />
                                    <p>
                                        {cocktail.strMeasure3}
                                        <span> </span>
                                        {cocktail.strIngredient3}
                                    </p>
                                </div>
                            }
                            {
                                cocktail.strIngredient4 && <div className='ingredient-item' onClick={() => {
                                    router.push('/ingredient/' + cocktail.strIngredient4)
                                }}>
                                    <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient4}-Medium.png`} alt="" />
                                    <p>
                                        {cocktail.strMeasure4}
                                        <span> </span>
                                        {cocktail.strIngredient4}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cocktail;