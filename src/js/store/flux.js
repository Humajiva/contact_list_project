import React, { useState, useEffect } from "react";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()


			addNewContact: (contact) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: contact.name,
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
				}
			}
		};
	};

	export default getState;
