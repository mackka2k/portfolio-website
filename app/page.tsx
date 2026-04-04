import Footer from "@/app/_components/Footer";
import HeroSection from "@/app/_components/HeroSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import Skills from "@/app/_components/Skills";
import { Navbar } from "@/app/_components/ui/Navbar";
import {
	BriefcaseBusiness,
	Contact as ContactIco,
	House,
	UserRound,
} from "lucide-react";

const navItems = [
	{ name: "Home", link: "#home", icon: <House /> },
	{ name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
	{ name: "About", link: "#about", icon: <UserRound /> },
	{ name: "Contact", link: "#contact", icon: <ContactIco /> },
];

const Homepage = () => {
	return (
		<main className="flex flex-col px-5 sm:px-10 relative">
			<div className="max-w-7xl mx-auto w-full">
				<Navbar navItems={navItems} />
				<HeroSection />
				<Skills />
				<ProjectsSection />
				{/* <Testimonials /> */}
				<Footer />
			</div>
		</main>
	);
};

export default Homepage;
