import React, { useEffect, useState } from 'react';
import SearchAndFilter from './search-and-filter';
import TopBar from './top-bar';
import Countries from './countries';

function Main() {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('all');
  const [filteredCountryData, setFilteredCountryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // debugger;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await response.json();
      //   console.log(data);
      setCountryData(data);
      setLoading(false);
      console.log('Hey');
    }
    fetchData();
  }, []);

  useEffect(() => {
    filterHandler();
  }, [countryData, status]);

  const filterHandler = () => {
    // const check = status;
    // console.log(countryData, 'countryData');
    // debugger;
    switch (status) {
      case 'africa':
        setFilteredCountryData(
          countryData.filter((country) => country.region === 'Africa')
        );
        break;
      case 'americas':
        setFilteredCountryData(
          countryData.filter((country) => country.region === 'Americas')
        );
        break;
      case 'asia':
        setFilteredCountryData(
          countryData.filter((country) => country.region === 'Asia')
        );
        break;
      case 'europe':
        setFilteredCountryData(
          countryData.filter((country) => country.region === 'Europe')
        );
        break;
      case 'oceania':
        setFilteredCountryData(
          countryData.filter((country) => country.region === 'Oceania')
        );
        break;

      default:
        setFilteredCountryData(countryData);
        break;
    }
  };

  return (
    <>
      <TopBar />
      <SearchAndFilter
        status={status}
        setStatus={setStatus}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Countries
        loading={loading}
        countryData={countryData}
        filteredCountryData={filteredCountryData}
        searchTerm={searchTerm}
      />
    </>
  );
}

export default Main;
