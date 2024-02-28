export default function () {
	return (
		<footer className="my-12 flex flex-col gap-6">
			<div className="flex gap-12 justify-center">
				<img src={"images/fb.svg"} width={22} height={22} alt="fb" />
				<img src={"images/insta.svg"} width={22} height={22} alt="insta" />
				<img src={"images/x.svg"} width={22} height={22} alt="twiter" />
				<img src={"images/yt.svg"} width={24} height={24} alt="youtube" />
			</div>
			<div className="flex max-sm:flex-col items-center gap-4 sm:gap-16 justify-center">
				<div className="text-lg font-bold">Conditions of Use</div>
				<div className="text-lg font-bold">Privacy & Policy</div>
				<div className="text-lg font-bold">Press Room</div>
			</div>
			<div className="text-center">
				<p className="text-lg font-bold text-[#848892]">
					&copy; 2021 MovieBox by Adriana Eka Prayudha
				</p>
			</div>
		</footer>
	);
}
