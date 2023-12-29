function Hearts({ count = 0, value = 0 }) {
  return (
    <p className="hit-points-indicator w-full justify-center flex flex-wrap gap-2 sm:w-1/2 md:gap-4">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <span
            key={i}
            className={i < value ? "hit-points-used" : "hit-points-unused"}
          ></span>
        ))}
    </p>
  );
}

export default Hearts;
