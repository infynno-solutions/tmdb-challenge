import Image from "next/image";

export default function () {
	return (
		<footer className="flex flex-col gap-12 items-center mt-20 mb-5">
			<div className="flex justify-center gap-10">
				<Image className="cursor-pointer" src="/fa-brands_facebook-square.png" alt="facebook" width={24} height={24} />
				<Image className="cursor-pointer" src="/fa-brands_instagram.png" alt="instagram" width={24} height={24} />
				<Image className="cursor-pointer" src="/fa-brands_twitter.png" alt="twitter" width={24} height={24} />
				<Image className="cursor-pointer" src="/fa-brands_youtube.png" alt="youtube" width={24} height={24} />
			</div>
			<div className="text-gray-900 justify-center lg:text-[18px] text-[16px] font-bold flex max-sm:items-center max-sm:flex-col gap-6 sm:gap-12">
				<span className="cursor-pointer">Conditions of Use</span>
				<span className="cursor-pointer">Privacy & Policy</span>
				<span className="cursor-pointer">Press Room</span>
			</div>
			<div className="text-gray-500 justify-center text-center">&copy; 2021 MovieBox by Adriana Eka Prayudha</div>
		</footer>
	)
}