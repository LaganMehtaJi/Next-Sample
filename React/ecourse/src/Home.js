import { useState, useEffect } from "react";
import Card from "./Card";
import { Axios } from "axios";

const Home = () => {
  const [data, setData] = useState([]);  // Initialize data as an empty array

  // Fetch data when the component mounts
  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:3000/api/user");
      setData(response.data);  // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use useEffect to call getData when the component mounts
  useEffect(() => {
    getData();
  }, []);  // Empty dependency array means this runs once when the component mounts

  return (
    <>
      {data.length > 0 ? (
        data.map((value) => (
          <Card key={value.id} {...value} />  // Spread value properties into Card
        ))
      ) : (
        <p>Loading data...</p>  // Show loading message while data is being fetched
      )}
    </>
  );
};

export default Home;
