const Progress = ({ value, max }) => {
  const progressWidth = `${((max - value) / max) * 100}%`;

  return (
    <div className="w-full sm:w-11/12 mx-auto max-w-xl lg:max-w-3xl xl:max-w-4xl">
      <div className=" progress h-4 bg-gray-200 rounded-full">
        <div
          className="progress-bar h-full rounded-full"
          style={{ width: progressWidth }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
