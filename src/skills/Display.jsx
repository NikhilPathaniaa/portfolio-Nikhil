import React, { useEffect, useState } from 'react'
import ClientsCount from './ClientsCount';
import PostCreator from './PostCreator';
const Display = () => {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost/find')
        .then(res=>res.json())
        .then(result=>{
            setData(result.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError(error);
            setLoading(false);
        });
    
    },[])

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

  return (
    
    <>
        {data.map(values => {
        if (values.verified) {
          return (
            <ClientsCount
              key={values.id}
              id={values.id}
              name={values.name}
              email={values.email}
              message={values.message}
            />
          );
        } else {
          return null; // Don't render if verified !== 1
        }
      })}

        <PostCreator/>
    </>
  )
}

export default Display