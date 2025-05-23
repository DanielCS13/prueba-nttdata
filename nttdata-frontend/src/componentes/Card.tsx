
const Card = ({ name, gender, location, email, dob, picture }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={picture}
        alt={`Foto de ${name}`}
        className="w-full h-48 object-cover rounded-t-md"
        style={{ aspectRatio: '4/3' }}
        loading="lazy"
      />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-gray-700 mt-2"><strong>Género:</strong> {gender}</p>
      <p className="text-gray-700"><strong>Ubicación:</strong> {location}</p>
      <p className="text-gray-700"><strong>Correo:</strong> {email}</p>
      <p className="text-gray-700"><strong>Fecha de nacimiento:</strong> {new Date(dob).toLocaleDateString()}</p>
    </div>
  );
};

export default Card;
