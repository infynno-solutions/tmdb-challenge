import APIManager from "@/manager/APIManager";
import SearchBar from "./SearchBar";

async function Navbar() {
  return (
    <nav className="fixed gap-7 z-10 left-0 right-0 top-0 px-6 py-3 flex text-white items-center justify-between ">
      <img src="/Logo.svg" alt="company logo" />
      <div className="grow max-w-[500px]">
        <SearchBar />
      </div>
      <div className="font-bold text-base gap-4 flex items-center">
        <div className="text-nowrap">Sign in</div>
        <img src="/hamburger-icon.svg" alt="hamburger" />
      </div>
    </nav>
  );
}
export default Navbar;
