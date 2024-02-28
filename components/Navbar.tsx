import Link from "next/link";

export default function () {
	return (
		<div className="fixed top-0 bg-[#9696964d] z-10 w-full">
			<div className="flex items-center justify-between px-3 py-2 max-w-7xl mx-auto">
				<div className="flex items-center gap-3">
					<img src={"images/moviebox.svg"} alt="moviebox" />
					<p className="text-white text-2xl font-medium select-none">
						MovieBox
					</p>
				</div>
				<div className="max-sm:hidden">
					<div className="border-white border-2 rounded-md flex items-center grow">
						<input
							type="text"
							placeholder="What do you want to watch?"
							className="bg-transparent placeholder:text-white w-[100%] py-1 px-2 text-white"
						/>
						<span className="px-2 shrink-0">
							<img src={"images/search.svg"} width={16} height={16} alt="tv" />
						</span>
					</div>
				</div>
				<div className="flex items-center gap-4 cursor-pointer">
					<Link href={"#"} className="text-white font-medium">
						Sign in
					</Link>
					<img src={"images/hamburger.svg"} alt="tv" />
				</div>
			</div>
		</div>
	);
}
