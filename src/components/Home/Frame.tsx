const Frame = ({ image, name, fallback }: any) => {
  return (
    <div className="border border-[#F92609] p-2 w-full max-w-[700px] aspect-video  min-h-[200px]">
      <div className="flex items-center justify-center w-full h-full overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          fallback || <span className="text-gray-500">No Image</span>
        )}
      </div>
    </div>
  );
};
export default Frame;