interface HomeContentViewInterface{
  contentModel:boolean;
  onClose:()=>void;
  particularHotel:any;
}
function HomeContentView({contentModel , onClose,particularHotel}:HomeContentViewInterface) {
  console.log(particularHotel)

  if(!contentModel) return null;

  function handleModelClose(e) {
    if (e.target.classList.contains("contentView")) {
      onClose();
    }
  }
  return (
   <div onClick={handleModelClose} className='contentView fixed top-0 inset-0 bg-black/80 flex justify-center items-center'>
    <div className="content bg-white p-6 rounded-lg shadow-lg max-w-lg">
      <h1 className="text-2xl font-bold mb-2">{particularHotel.title}</h1>
      <img src={particularHotel.image} alt={particularHotel.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <p className="text-gray-700 mb-1"><strong>Location:</strong> {particularHotel.location}</p>
      <p className="text-gray-600 mb-4">{particularHotel.description}</p>
      <p className="text-lg font-semibold mb-1"><strong>Price:</strong> {particularHotel.price}</p>
      <p className="text-sm text-gray-500 mb-1"><strong>Type:</strong> {particularHotel.type}</p>
      <p className="text-sm text-gray-500 mb-1"><strong>Duration:</strong> {particularHotel.duration} days</p>
      <p className="text-sm text-yellow-500"><strong>Rating:</strong> {particularHotel.rating}</p>
    </div>
   </div>
  )
}

export default HomeContentView