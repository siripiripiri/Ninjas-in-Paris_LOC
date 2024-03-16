import React, { useEffect, useState } from 'react';

const About = () => {
  const [searchedQuery, setSearchedQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:5000/update_search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchedQuery }),
      });

      const result = await response.json();
      console.log(result.message);  // Log the message from the server
    } catch (error) {
      console.error('Error updating search:', error);
    }
  };

  const fetchSearchQuery = async () => {
    try {
      const response = await fetch('http://localhost:5000/get_search');
      const data = await response.json();
      setSearchedQuery(data.searchedQuery || '');
    } catch (error) {
      console.error('Error fetching search query:', error);
    }
  };

  useEffect(() => {
    fetchSearchQuery();
  }, []);  // Fetch the search query on component mount

  return (
    <>
      <div className="bg">
        <h1 className='tit'>Network Graph</h1>
        <input
          type="text"
          id="searchBar"
          className="searchArea"
          name="search"
          placeholder="Search by Event"
          value={searchedQuery}
          onChange={(e) => setSearchedQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <p>Searched Query: {searchedQuery}</p>
      </div>
    </>
  );
};

export default About;
