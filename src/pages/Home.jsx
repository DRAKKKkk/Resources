import { useState } from 'react';
import FieldCard from '../components/FieldCard';

function Home() {
  const [fieldName, setFieldName] = useState('');
  const [fields, setFields] = useState([]);

  const addField = () => {
    if (!fieldName.trim()) return;
    setFields([...fields, fieldName.trim()]);
    setFieldName('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📁 Resource Tracker</h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          className="w-full p-2 mb-2 rounded bg-gray-800 border border-gray-600"
          placeholder="Enter field name"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
        <button
          onClick={addField}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          ➕ Add Field
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {fields.map((name, i) => (
          <FieldCard key={i} name={name} />
        ))}
      </div>
    </div>
  );
}

export default Home;
