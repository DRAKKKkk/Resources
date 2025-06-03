function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function ResourceItem({ resource, onDelete }) {
  const isLink = isValidUrl(resource.content);

  return (
    <div className="relative group bg-gray-800 p-4 rounded border border-gray-700">
      <div className="flex justify-between items-center">
        {isLink ? (
          <a
            href={resource.content}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline break-all"
          >
            {resource.content}
          </a>
        ) : (
          <p className="break-all text-white">{resource.content}</p>
        )}
        <button
          onClick={onDelete}
          className="text-red-400 hover:text-red-600 ml-4"
          title="Delete"
        >
          🗑️
        </button>
      </div>

      {resource.desc && (
        <div className="absolute left-0 top-full mt-2 w-full p-2 rounded bg-gray-900 text-sm text-gray-300 border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
          {resource.desc}
        </div>
      )}
    </div>
  );
}

export default ResourceItem;
