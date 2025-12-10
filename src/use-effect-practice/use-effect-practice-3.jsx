import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectPracticeThree = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fun1 = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        console.log("Fetched data:", response.data);
      } catch (err) {
        console.log("Error while fetching data:", err);
      }
      setLoading(false);
    };
    fun1();
  }, []);

  return (
    <div>
      <h1>useEffect practice</h1>
      {loading ? (
        <div style={{textAlign: 'center', padding: '20px'}}>
          <h2>Loading...</h2>
        </div>
      ) : (
        data.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UseEffectPracticeThree;