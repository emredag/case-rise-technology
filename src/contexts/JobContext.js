
import React, { createContext, useEffect, useState } from "react";


const JobContext = createContext();

// eslint-disable-next-line react/prop-types
export const JobProvider = ({ children }) => {

	const [allJobs, setAllJobs] = useState([]);

	useEffect(() => {

		if (localStorage.getItem("jobs")) {
			setAllJobs(JSON.parse(localStorage.getItem("jobs")));
		}

	}, []);



	const values = {
		allJobs, setAllJobs
	};

	return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default JobContext;