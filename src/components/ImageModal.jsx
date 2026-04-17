import React from "react";

const ImageModal = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full p-4">

        <img
          src={image.url}
          alt=""
          className="w-full rounded-lg"
        />

        <div className="flex justify-between mt-4">
          <p className="text-white">{image.title}</p>

          <a
            href={image.url}
            download
            className="bg-white text-black px-4 py-2 rounded-full"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;