import Image from "next/image";

export default function () {
	return (
		<footer className="flex flex-col gap-12 items-center mt-20 mb-5">
			<div className="flex justify-center gap-10">
				<Image src="/fa-brands_facebook-square.png" alt="facebook" width={24} height={24} />
				<Image src="/fa-brands_instagram.png" alt="facebook" width={24} height={24} />
				<Image src="/fa-brands_twitter.png" alt="facebook" width={24} height={24} />
				<Image src="/fa-brands_youtube.png" alt="facebook" width={24} height={24} />
			</div>
			<div className="text-gray-900 justify-center lg:text-[18px] text-[16px] font-bold flex gap-12">
				<span>Conditions of Use</span>
				<span>Privacy & Policy</span>
				<span>Press Room</span>
			</div>
			<div className="text-gray-500 justify-center">&copy; 2021 MovieBox by Adriana Eka Prayudha</div>
		</footer>
	)
}