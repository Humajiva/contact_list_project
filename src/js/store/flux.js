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
