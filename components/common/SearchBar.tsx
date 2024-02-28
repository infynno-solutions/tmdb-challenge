function SearchBar() {
  return (
    <div className="max-sm:hidden">
      <div className="border-white border-2 rounded-md flex items-center">
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="w-full bg-transparent outline-none placeholder:text-white py-1 px-2 text-white"
        />
        <span className="px-2 shrink-0">
          <img src={"/search.svg"} width={16} height={16} alt="tv" />
        </span>
      </div>
    </div>
  );
}
export default SearchBar;
