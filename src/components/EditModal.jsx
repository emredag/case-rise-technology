import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import JobContext from "../contexts/JobContext";

function EditModal() {
	const { allJobs, setAllJobs, editModal, setEditModal, todoName, todoCategory, todoId } =
		useContext(JobContext);

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
							<option
								value="Urgent"
								label="Urgent"
								selected={todoCategory === "Urgent"}
							/>

							<option
								value="Regular"
								label="Regular"
								selected={todoCategory === "Regular"}
							/>

							<option
								value="Trivial"
								label="Trivial"
								selected={todoCategory === "Trivial"}
							/>
						</select>
					</div>

					<div className="action">
						<Button className="cancel" onClick={closeModal} variant="contained">
							Cancel
						</Button>

						<Button
							className="save-todo"
							onClick={editTodo}
							variant="contained"
							color="error"
						>
							Save
						</Button>
					</div>
				</div>
			</>
		)
	);
}

export default EditModal;
