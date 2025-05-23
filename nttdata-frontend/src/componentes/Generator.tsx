import { useState, useEffect } from 'react';
import Card from './Card';

const API_URL = import.meta.env.PUBLIC_API_URL;

export const Generator = () => {
  const [count, setCount] = useState(10);
  const [data, setData] = useState([]);

  const fetchData = async (count) => {
    try {
      const res = await fetch(`${API_URL}?count=${count}`);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData(count);
  }, [count]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setCount(value);
    }
  };

  return (
    <>
      <label htmlFor="userCount" className="mb-2 font-semibold">Cantidad de usuarios (1-100):</label>
      <input
        id="userCount"
        type="number"
        min="1"
        max="100"
        value={count}
        onChange={handleChange}
        className="mb-6 p-2 border rounded w-32 text-center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((user, index) => (
          <Card
            key={index}
            name={`${user.name.title} ${user.name.first} ${user.name.last}`}
            gender={user.gender}
            location={`${user.location.city}, ${user.location.state}, ${user.location.country}`}
            email={user.email}
            dob={user.dob.date}
            picture={user.picture.large}
          />
        ))}
      </div>
    </>
  );
};
