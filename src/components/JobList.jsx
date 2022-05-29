import React, { useContext } from "react";
import JobContext from "../contexts/JobContext";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { red } from "@mui/material/colors";

function JobList() {
	const {
		allJobs,
		deleteModal,
		setDeleteModal,
		editModal,
		setEditModal,
		setTodoId,
		setTodoName,
		setTodoCategory,
	} = useContext(JobContext);

	const priorityColor = (item) => {
		if (item.category === "Urgent") {
			return "red";
		} else if (item.category === "Regular") {
			return "orange";
		} else if (item.category === "Trivial") {
			return "blue";
		}
	};

	const toggleDelete = (id) => {
		setDeleteModal(!deleteModal);
		setTodoId(id);
	};

	const toggleEdit = (id, name, category) => {
		setEditModal(!editModal);
		setTodoId(id);
		setTodoName(name);
		setTodoCategory(category);
	};

	return (
		<>
			<div className="job-list">
				<div className="job-list-titles">
					<div className="name">Name</div>
					<div className="priority">Priority</div>
					<div className="action">Action</div>
				</div>

				<div className="job-list-items">
					{allJobs.map((item, index) => (
						<>
							<div className="items" key={index}>
								<div className="name">{item.name}</div>
								<div className={`${priorityColor(item)} priority`}>
									<p>{item.category}</p>
								</div>
								<div className="action">
									<div
										onClick={() => {
											toggleEdit(item.id, item.name, item.category);
										}}
									>
										<EditRoundedIcon color="success" fontSize="large" />
									</div>
									<div
										onClick={() => {
											toggleDelete(item.id);
										}}
									>
										<DeleteForeverRoundedIcon
											sx={{ color: red[700] }}
											fontSize="large"
										/>
									</div>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
}

export default JobList;
