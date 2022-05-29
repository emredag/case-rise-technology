
import React, { createContext, useEffect, useState } from "react";


const JobContext = createContext();

// eslint-disable-next-line react/prop-types
export const JobProvider = ({ children }) => {

	const [allJobs, setAllJobs] = useState([]);
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [todoId, setTodoId] = useState();
	const [todoName, setTodoName] = useState();
	const [todoCategory, setTodoCategory] = useState();

	useEffect(() => {

		if (localStorage.getItem("jobs")) {
			setAllJobs(JSON.parse(localStorage.getItem("jobs")));
		}

	}, []);



	const values = {
		allJobs, setAllJobs, deleteModal, setDeleteModal, editModal, setEditModal, todoId, setTodoId, todoCategory, setTodoCategory, todoName, setTodoName
	};

	return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default JobContext;