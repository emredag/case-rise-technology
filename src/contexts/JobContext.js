
import React, { createContext, useEffect, useState } from "react";
import { fetchPriority } from "../service/Service";



const JobContext = createContext();


// eslint-disable-next-line react/prop-types
export const JobProvider = ({ children }) => {

	const [allJobs, setAllJobs] = useState([
		{
			"name": "Rise",
			"category": "Urgent",
			"id": 1,
			"categoryId": 1
		},
		{
			"name": "Tech",
			"category": "Regular",
			"id": 2,
			"categoryId": 2
		},
		{
			"name": "Case",
			"category": "Trivial",
			"id": 3,
			"categoryId": 3
		}
	]);

	const [allCategory, setAllCategory] = useState([]);

	const [deleteModal, setDeleteModal] = useState(false);

	const [editModal, setEditModal] = useState(false);

	const [todoId, setTodoId] = useState();

	const [todoName, setTodoName] = useState();

	const [todoCategory, setTodoCategory] = useState();

	const [sortByPriority, setSortByPriority] = useState(true);

	const [sortByJobName, setSortByJobName] = useState(null);


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


	if (sortByJobName === true) {
		allJobs.sort((a, b) => {
			return 1 * a.name.localeCompare(b.name);
		});
	} else if (sortByJobName === false) {
		allJobs.sort((a, b) => {
			return -1 * a.name.localeCompare(b.name);
		});
	}


	if (sortByPriority === true) {
		allJobs.sort((a, b) => {
			return a.categoryId - b.categoryId;
		});
	} else if (sortByPriority === false) {
		allJobs.sort((a, b) => {
			return b.categoryId - a.categoryId;
		});
	}


	const values = {
		allJobs, setAllJobs, deleteModal, setDeleteModal, editModal, setEditModal, todoId, setTodoId, todoCategory, setTodoCategory, todoName, setTodoName, allCategory, setAllCategory, sortByPriority, setSortByPriority, sortByJobName, setSortByJobName
	};

	return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default JobContext;