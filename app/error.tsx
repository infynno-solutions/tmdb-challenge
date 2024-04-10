'use client'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center space-y-5 bg-red-500">
			<h2 className="text-3xl text-white">Something went wrong!</h2>
			<button
				className="rounded bg-white p-2.5 text-black"
				onClick={() => reset()}>
				Try again
			</button>
		</div>
	)
}
