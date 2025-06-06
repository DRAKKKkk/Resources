import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ResourceDetail() {
  const { name } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/resources?name=${name}`)
      .then(res => setResource(res.data))
      .catch(err => console.log(err));
  }, [name]);

  if (!resource) return <div>Loading...</div>;

  return (
    <div>
      <h2>{resource.title}</h2>
      {/* other details */}
    </div>
  );
}

export default ResourceDetail;