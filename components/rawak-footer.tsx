import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const RawakFooter = () => {
	const handleGetLocation = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log("position", position);
				const { latitude, longitude } = position.coords;
				console.log([latitude, longitude]);
			},
			(error) => {
				console.error("Error getting location:", error);
			},
		);
	};

	return (
		<footer className="h-8 w-full p-8 flex items-center justify-center fixed bottom-0 left-0 right-0 bg-background border-t-2 border-border shadow-sm gap-4">
			<Button
				variant="outline"
				className="bg-gradient-to-br from-orange-500 to-orange-300 border border-orange-400 rounded-full text-background font-medium"
				onClick={handleGetLocation}
			>
				<p>Dapatkan masjid terdekat</p>
			</Button>
			<Link href="/rawak">
				<Button
					variant="outline"
					className="bg-gradient-to-br from-orange-500 to-orange-300 border border-orange-400 rounded-full"
				>
					<p className="text-background font-medium">Sedekah Rawak</p>
				</Button>
			</Link>
		</footer>
	);
};


export default RawakFooter;
