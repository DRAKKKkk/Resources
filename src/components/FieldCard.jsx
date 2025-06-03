import { useNavigate } from 'react-router-dom';

function FieldCard({ name }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/field/${name}`)}
      className="cursor-pointer p-4 bg-gray-800 rounded shadow text-center border border-gray-700 hover:bg-gray-700"
    >
      <h2 className="text-lg font-semibold">{name}</h2>
    </div>
  );
}

export default FieldCard;
