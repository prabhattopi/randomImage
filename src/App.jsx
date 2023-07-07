import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FiShare2 } from "react-icons/fi";
import {Button} from "./component/Button.jsx"
function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    fetch("https://picsum.photos/300/300")
      .then((response) => {
        console.log(response);
        setImageUrl(response.url);
      })
      .catch((error) => {
        console.error("Error fetching random image:", error);
      });
  };
  const handleShare = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Random Image Display" />
        <meta
          property="og:description"
          content="Check out this random image!"
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NumericalWallah" />
      </Helmet>
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full sm:max-w-md sm:w-auto">

        <h1 className="text-2xl font-bold mb-4">Random Image Display</h1>
        <img src={imageUrl} alt="Random" className="mb-4" />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleShare}
        >
          Share <FiShare2 className="inline-block ml-1" />
        </button>
      </div>
      {showModal ?<Button imageUrl={imageUrl} closeModal={closeModal}/>:""}
    </div>
  );
}

export default App;
