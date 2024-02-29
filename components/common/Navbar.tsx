import APIManager from "@/manager/APIManager";
import SearchBar from "./SearchBar";

async function Navbar() {
  return (
    <nav
      style={{
        background: "rgb(0 0 0 / 36%)",
        "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
        "backdropFilter": "blur(2.9px)",
      }}
      className="fixed gap-7 z-10 left-0 right-0 top-0 px-6 py-3 flex text-white items-center justify-between "
    >
      <img src="/Logo.svg" className={`max-md:h-[30px]`} alt="company logo" />
      <div className="grow max-w-[500px]">
        <SearchBar />
      </div>
      <div className="font-bold text-base gap-4 flex items-center">
        <div className="text-nowrap cursor-pointer">Sign in</div>
        <img src="/hamburger-icon.svg" className={`max-md:h-[30px] cursor-pointer`} alt="hamburger" />
      </div>
    </nav>
  );
}
export default Navbar;
