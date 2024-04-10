import Image from 'next/image'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiMiniBars2 } from 'react-icons/hi2'

export default function Header() {
	return (
		<header className="absolute inset-x-0 z-10 bg-transparent">
			<div className="mx-auto max-w-screen-xl px-5 py-4">
				<div className="grid grid-cols-2 md:grid-cols-12">
					<div className="md:col-span-3 md:flex md:items-center md:gap-12">
						<a
							className="flex items-center gap-5 text-black md:gap-7"
							href="#">
							<Image
								src="/logo.svg"
								alt="Logo"
								width={40}
								height={40}
							/>
							<span className="text-base font-bold text-white md:text-2xl">
								MovieBox
							</span>
						</a>
					</div>
					<div className="hidden md:col-span-6 md:block">
						<div className="relative">
							<input
								type="text"
								placeholder="What do you want to watch?"
								className="w-full rounded-md border-2 border-gray-300 bg-transparent py-2.5 pe-10 indent-2.5 text-white placeholder:text-white focus:outline-none active:ring-0 sm:text-sm"
							/>
							<div className="absolute inset-y-0 end-0 grid w-10 place-content-center">
								<HiOutlineSearch className="size-4 text-white" />
							</div>
						</div>
					</div>
					<div className="flex items-center justify-end gap-4 md:col-span-3">
						<div className="sm:flex sm:items-center sm:gap-4">
							<a
								className="text-base font-bold text-white"
								href="#">
								Sign in
							</a>

							<div className="hidden size-9 rounded-full bg-rose-700 p-1.5 sm:flex sm:items-center sm:justify-center">
								<HiMiniBars2 className="size-6 text-white" />
							</div>
						</div>

						<div className="block md:hidden">
							<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
