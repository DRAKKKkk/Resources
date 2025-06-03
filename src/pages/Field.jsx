import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ResourceItem from '../components/ResourceItem';

function Field() {
  const { name } = useParams();
  const storageKey = `resources-${name}`;
  const [input, setInput] = useState('');
  const [desc, setDesc] = useState('');
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey)) || [];
    setResources(saved);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(resources));
  }, [resources, storageKey]);

  const addResource = () => {
    if (!input.trim()) return;
    const newRes = {
      id: Date.now(),
      content: input.trim(),
      desc: desc.trim()
    };
    setResources([...resources, newRes]);
    setInput('');
    setDesc('');
  };

  const deleteResource = (id) => {
    const updated = resources.filter((r) => r.id !== id);
    setResources(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">{name} Resources</h1>

      <div className="mb-6">
        <input
          className="w-full p-2 mb-2 rounded bg-gray-800 border border-gray-600"
          placeholder="Resource (link, text, etc)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-2 rounded bg-gray-800 border border-gray-600"
          placeholder="Optional description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button
          onClick={addResource}
          className="w-full bg-green-600 hover:bg-green-700 p-2 rounded"
        >
          ➕ Add Resource
        </button>
      </div>

      <div className="space-y-4">
        {resources.map((r) => (
          <ResourceItem key={r.id} resource={r} onDelete={() => deleteResource(r.id)} />
        ))}
      </div>
    </div>
  );
}

export default Field;
