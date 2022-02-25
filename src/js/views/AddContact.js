import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const addNewContact = (fn, em, ad, ph) => {
		fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				full_name: fn,
				email: em,
				address: ad,
				phone: ph,
				agenda_slug: "Huma_jiva"
			})
		})
			.then(response => response.json())
			.then(data => {
				actions.getData();
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={fullName}
							onChange={e => setFullName(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							value={phone}
							onChange={e => setPhone(e.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							value={address}
							onChange={e => setAddress(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => addNewContact(fullName, email, address, phone)}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
