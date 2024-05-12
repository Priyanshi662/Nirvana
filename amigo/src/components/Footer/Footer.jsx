import React, { useState } from "react";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";
import waves from "../../images/waves.svg";
import laptop from "../../images/laptop.svg";
import "./footer.css";
import Button from "../Button/Button";
import emailjs from "emailjs-com";

const Footer = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_USER
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setUser({
			name: "",
			email: "",
			message: "",
		});
	};
	const handleReset = () => {
		setUser({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<>
		</>
	);
};

export default Footer;
