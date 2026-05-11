const ImageModal = ({ image, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-6"
    >
      <img
        src={image.url}
        className="max-w-5xl w-full rounded-lg"
      />
    </div>
  );
};

export default ImageModal;