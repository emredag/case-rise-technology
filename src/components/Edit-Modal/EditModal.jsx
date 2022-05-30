import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import JobContext from "../../contexts/JobContext";

function EditModal() {
	const {
		allJobs,
		setAllJobs,
		editModal,
		setEditModal,
		todoName,
		todoCategory,
		todoId,
		allCategory,
	} = useContext(JobContext);

	const [editedCategory, setEditedCategory] = useState();

	const editTodo = () => {
		const data = allJobs.filter((job) => job.id === todoId);

		data[0].category = editedCategory;

		const notSame = allJobs.filter((job) => job.id !== todoId);

		const newData = [...data, ...notSame];

		setAllJobs(newData);

		localStorage.setItem("jobs", JSON.stringify(newData));

		setEditModal(!editModal);
	};

	const closeModal = () => {
		setEditModal(!editModal);
	};

	return (
		editModal && (
			<>
				<div className="overlay"></div>

				<div className="edit-modal">
					<div className="edit-title">
						<h2>Job Edit</h2>
					</div>

					<div className="job-name">
						<p>Job Name</p>

						<input className="name-box" type="text" placeholder={todoName} disabled />
					</div>

					<div className="job-priority">
						<p>Job Priority</p>

						<select
							onChange={(e) => {
								setEditedCategory(e.target.value);
							}}
						>
							{allCategory.map((item, index) => {
								return (
									<option
										key={index}
										value={item.job_name}
										label={item.job_name}
										selected={todoCategory === item.job_name}
									/>
								);
							})}
						</select>
					</div>

					<div className="action">
						<Button
							className="cancel"
							onClick={closeModal}
							variant="contained"
							color="error"
						>
							Cancel
						</Button>

						<Button className="save-todo" onClick={editTodo} variant="contained">
							Save
						</Button>
					</div>
				</div>
			</>
		)
	);
}

export default EditModal;
