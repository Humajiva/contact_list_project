import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { EditContact } from "./EditContact";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		id: null
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda.map((item, index) => {
							return (
								<ContactCard
									onDelete={() => setState({ showModal: true, id: item.id })}
									contact={item}
									key={index}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={state.id} />
		</div>
	);
};
