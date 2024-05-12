import React, { useEffect } from "react";
import "./home.css";
import favicon from "../../images/NirvanaLogo.png";
import home_ss from "../../images/home_ss.png";
import home_ss_1 from "../../images/home_ss_1.png";
import home_ss_2 from "../../images/home_ss_2.png";
import { Gift, Lock, Smile } from "react-feather";
import Accordian from "../../components/Accordian/Accordian";

const Home = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	const homeAboutCards = [
		{
			icon: <Smile />,
			title: "Simple and Intuitive",
			description:
				"Amigo features a minimalistic and clean design, letting you focus on what you feel and want to write.",
			layout: [33, 50, 100],
		},
		{
			icon: <Lock />,
			title: "Private and Secure",
			description:
				"Your data always remains secure. The journal is encrypted with a password and stores in cloud.",
			layout: [33, 50, 100],
		},
		{
			icon: <Gift />,
			title: "Completely free and open source",
			description: (
				<>
					The app is free and open source and it's code can always be
					found on
					<a href="https://github.com/akshatmittal61/amigo">
						{" "}
						GitHub
					</a>
				</>
			),
			layout: [33, 100, 100],
		},
	];
	return (
		<section className="home">
			<div className="home-hero">
				<div className="home-hero-image">
					<img src={favicon} alt="Amigo" />
				</div>
				<div className="home-hero-title">
					<span>Nirvana Journal</span>
				</div>
				<div className="home-hero-subtitle">
					<span>A safe place for all your thoughts</span>
				</div>
			</div>
		</section>
	);
};

export default Home;
