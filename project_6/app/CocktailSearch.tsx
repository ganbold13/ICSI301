"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface CocktailData {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

const CocktailSearch = () => {
    const router = useRouter();

    const [cocktails, setCocktails] = useState<CocktailData[]>([]);
    const [selectedLetter, setSelectedLetter] = useState<string>("A");

    const handleLetterClick = (letter: string) => {
        setSelectedLetter(letter);
    };

    useEffect(() => {
        if (selectedLetter) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${selectedLetter}`
                    );
                    setCocktails(response.data.drinks);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
    }, [selectedLetter]);

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>Cocktail Search</h1>
            <div>
                {Array.from({ length: 26 }, (_, index) => {
                    const letter = String.fromCharCode(65 + index);
                    return (
                        <button key={letter} className={`${letter == selectedLetter ? 'bg-blue-500 font-bold' : 'bg-blue-300'}  w-10 h-10 m-1 rounded-md hover:bg-blue-400 hover:-translate-y-1 hover:shadow-md transition-all`} onClick={() => handleLetterClick(letter)}>
                            {letter}
                        </button>
                    );
                })}
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {cocktails && cocktails.map((cocktail) => (
                    <li key={cocktail.idDrink}>
                        <div className='m-3 flex flex-col items-center border border-blue-300 bg-blue-200 p-2 rounded-xl cursor-pointer transition-all hover:shadow-blue-200 hover:shadow-md hover:m-2 hover:border-blue-500 hover:bg-blue-300 hover:font-bold' onClick={() => {
                            router.push('/drinks/' + cocktail.idDrink)
                        }}>
                            <div className='bg-cover bg-center'>
                                <img className='rounded-lg' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} loading='lazy' />
                            </div>
                            <p className='text-lg pt-2'>
                                {cocktail.strDrink}
                            </p>
                        </div>
                    </li>
                ))}

                {
                    !cocktails && <div>
                        No cocktails found.
                    </div>
                }
            </ul>
        </div>
    );
};

export default CocktailSearch;
