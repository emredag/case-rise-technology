
import React, { createContext, useEffect, useState } from "react";
import { fetchPriority } from "../service/Service";



const JobContext = createContext();

// eslint-disable-next-line react/prop-types
export const JobProvider = ({ children }) => {

	const [allJobs, setAllJobs] = useState([]);
	const [allCategory, setAllCategory] = useState([]);
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


	useEffect(() => {
		try {
			fetchPriority().then((res) => { setAllCategory(res.data); });
		} catch (error) {
			console.log(error);
		}
	}, []);








	const values = {
		allJobs, setAllJobs, deleteModal, setDeleteModal, editModal, setEditModal, todoId, setTodoId, todoCategory, setTodoCategory, todoName, setTodoName, allCategory, setAllCategory
	};

	return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default JobContext;