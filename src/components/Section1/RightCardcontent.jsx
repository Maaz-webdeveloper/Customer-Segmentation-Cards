const RightCardcontent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between ">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg leading-relaxed text-white mb-14 text-shadow-2xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat eum
          exercitationem voluptates! Officiis, aliquid quasi.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium py-2 px-7 rounded-full "
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium py-2 px-4 rounded-full "
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardcontent;
