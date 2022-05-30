import React, { useContext, useState } from "react";
import JobContext from "../../contexts/JobContext";
import JobsItem from "./JobsItem";

function JobList() {
	const {
		allJobs,
		allCategory,
		sortByPriority,
		setSortByPriority,
		sortByJobName,
		setSortByJobName,
	} = useContext(JobContext) || {};

	const [search, setSearch] = useState("");
	const [currentCategory, setCurrentCategory] = useState("All");

	return (
		<>
			<div className="job-list">
				<div className="job-search">
					<input
						type="text"
						placeholder="Job Name"
						className="search-input"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<select
						className="select-category"
						onChange={(e) => {
							setCurrentCategory(e.target.value);
						}}
					>
						<option label="Priority (all)" value="All" />
						{allCategory?.map((item, index) => {
							return (
								<option key={index} value={item.job_name} label={item.job_name} />
							);
						})}
					</select>
				</div>

				<div className="job-list-titles">
					<div
						className="name"
						onClick={() => {
							setSortByJobName(!sortByJobName);
							setSortByPriority(null);
						}}
					>
						Name {sortByJobName && "↓"} {sortByJobName === false && "↑"}
					</div>
					<div
						className="priority"
						onClick={() => {
							setSortByPriority(!sortByPriority);
							setSortByJobName(null);
						}}
					>
						Priority {sortByPriority && "↓"} {sortByPriority === false && "↑"}
					</div>
					<div className="action">Action</div>
				</div>

				<ul className="job-list-items">
					{allJobs
						?.filter((item) => {
							if (search == "") {
								return item;
							} else if (item.name.toLowerCase().includes(search.toLowerCase())) {
								return item;
							}
						})
						.map((item, index) => {
							if (currentCategory === item.category) {
								return <JobsItem item={item} index={index} />;
							} else if (currentCategory === "All") {
								return <JobsItem item={item} index={index} />;
							}
						})}
				</ul>
			</div>
		</>
	);
}

export default JobList;
