import { useState, useRef } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.match('image.*')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-gradient-to-br mt-9 from-purple-900 md:w-[25%] md:h-[20%] w-[97%] h-[70%] rounded-[20px] to-indigo-800 flex flex-col items-center justify-center p-4">
     
      <div 
        className={`w-full max-w-md rounded-2xl overflow-hidden ${!previewImage ? 'bg-white/20 backdrop-blur-md' : ''} border-2 border-dashed border-white/30 p-8 flex flex-col items-center justify-center transition-all duration-300`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />

        {previewImage ? (
          <div className="relative group">
            <img 
              src={previewImage} 
              alt="Preview" 
              className="w-full h-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <button 
                className="bg-white text-purple-900 px-4 py-2 rounded-full font-bold hover:bg-purple-100 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                  setPreviewImage(null);
                }}
              >
                Change Image
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto text-white mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-white/80 mb-4">Drag & drop an image or click to browse</p>
            <button 
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Select File
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="mt-6 text-white text-center">
          <p className="text-sm bg-white/10 px-4 py-2 rounded-full">
            {selectedImage.name} • {(selectedImage.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;