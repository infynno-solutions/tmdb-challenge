import Image from "next/image";
import styles from "./Navbar.module.css";

export default function () {
	return (
		<nav className="w-full absolute z-[1] top-0 text-white flex justify-between gap-12 xl:gap-40 items-center px-5 py-4">
			<div className="flex items-center gap-3">
				<Image src="/tv.png" height={50} width={50} alt="Moviebox tv" />
				<h5 className={styles.navbar_title}>MovieBox</h5>
			</div>
			<div className="flex max-sm:hidden items-center px-2 justify-between border-2 border-gray-50 rounded-md md:grow">
				<input
					type="text"
					placeholder="What do you want to watch?"
					className="outline-none p-2 bg-transparent placeholder:text-white w-4/5"
				/>
				<span>
					<Image src="/Search.png" alt="Search" width={16} height={16} />
				</span>
			</div>
			<div className="flex items-center gap-3">
				<h5 className={styles.navbar_title}>Sign In</h5>
				<Image src="/Menu.png" height={36} width={36} alt="menu icon" />
			</div>
		</nav>
	);
}
