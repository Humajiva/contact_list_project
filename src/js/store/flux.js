import React, { useState, useEffect } from "react";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Huma_jiva")
					.then(response => {
						console.log(response);
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ agenda: data });
					})
					.catch(error => {
						console.log("error", error);
					});
			},

			editContact: contact => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: contact.full_name,
						email: contact.email,
						address: contact.address,
						phone: contact.phone,
						agenda_slug: "Huma_jiva"
					})
				})
					.then(response => response.json())
					.then(data => {
						console.log("putrequestworked");
						getActions().getData();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			addNewContact: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: contact.full_name,
						email: contact.emailem,
						address: contact.address,
						phone: contact.phone,
						agenda_slug: "Huma_jiva"
					})
				})
					.then(response => response.json())
					.then(data => {
						getActions().getData();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						getActions().getData();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
		}
	};
};

export default getState;
