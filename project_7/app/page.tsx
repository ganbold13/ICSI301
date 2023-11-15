'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface WineData {
  points: number;
  title: string;
  description: string;
  taster_name: string | null;
  taster_twitter_handle: string | null;
  price: number;
  designation: string | null;
  variety: string;
  region_1: string;
  region_2: string;
  province: string;
  country: string;
  winery: string;
}

interface Filters {
  byRegion: string;
  byVariety: string;
  byName: string;
  byCountry: string;
  minPrice: string;
  maxPrice: string;
}

export default function Home() {
  const [data, setData] = useState<WineData[]>([]);
  const [filteredData, setFilteredData] = useState<WineData[]>([]);
  const [filters, setFilters] = useState<Filters>({
    byRegion: '',
    byVariety: '',
    byName: '',
    byCountry: '',
    minPrice: '',
    maxPrice: '',
  });
  const [regions, setRegions] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [varieties, setVarieties] = useState<string[]>([]);



  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchRegions();
    fetchCountries();
    fetchVarieties();
  }, []);

  const fetchData = () => {
    axios.get('api/data/search', { params: filters })
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchRegions = () => {
    axios.get('/api/data/regions')
      .then((response) => {
        setRegions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCountries = () => {
    axios.get('/api/data/countries')
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchVarieties = () => {
    axios.get('/api/data/varieties')
      .then((response) => {
        setVarieties(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const handleFilterChange = (filterName: keyof Filters, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      byRegion: '',
      byVariety: '',
      byName: '',
      byCountry: '',
      minPrice: '',
      maxPrice: '',
    });
  };

const renderTable = () => {
  return (
    <table className="w-full fixed-table">
      <thead>
        <tr>
          <th className="w-1/6">Title</th>
          <th className="w-2/6">Description</th>
          <th className="w-1/6">Region</th>
          <th className="w-1/6">Variety</th>
          <th className="w-16">Price</th>
          <th className="w-32">Country</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, i) => (
          <tr key={i + "item"} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.region_1 ? item.region_1.toLowerCase() : 'N/A'}</td>
            <td>{item.variety ? item.variety.toLowerCase() : 'N/A'}</td>
            <td>{item.price}</td>
            <td>{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

return (
  <main className="flex min-h-screen flex-col items-center p-24">
    <div className='flex flex-wrap gap-4 mb-8'>
      <div className="flex flex-col">
        <label htmlFor="byRegion" className="mb-1">Filter by Region:</label>
        <select
          id="byRegion"
          value={filters.byRegion}
          onChange={(e) => handleFilterChange('byRegion', e.target.value)}
          className=""
        >
          <option value="">All</option>
          {regions.map((region, i) => (
            <option key={i + "region"} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="byVariety" className="mb-1">Filter by Variety:</label>
        <select
          id="byVariety"
          value={filters.byVariety}
          onChange={(e) => handleFilterChange('byVariety', e.target.value)}
          className=""
        >
          <option value="">All</option>
          {varieties.map((variety, i) => (
            <option key={i + "variety"} value={variety}>
              {variety}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="byCountry" className="mb-1">Filter by Country:</label>
        <select
          id="byCountry"
          value={filters.byCountry}
          onChange={(e) => handleFilterChange('byCountry', e.target.value)}
          className=""
        >
          <option value="">All</option>
          {countries.map((country, i) => (
            <option key={i + "country"} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="minPrice" className="mb-1">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange('minPrice', e.target.value)}
          className=""
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="maxPrice" className="mb-1">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          className=""
        />
      </div>
      <div className="flex items-end">
        <button onClick={fetchData} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 hover:shadow font-bold">Search</button>
        <button onClick={handleResetFilters} className="bg-zinc-300 px-4 py-2 rounded-md hover:bg-zinc-400">Reset Filters</button>
      </div>
    </div>

    {renderTable()}
  </main>
);

}
