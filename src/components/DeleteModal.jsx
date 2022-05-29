/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import JobContext from "../contexts/JobContext";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";

export default function DeleteModal() {
	const { allJobs, setAllJobs, deleteModal, setDeleteModal, todoId } = useContext(JobContext);

	const deleteTodo = (id) => {
		const notSame = allJobs.filter((job) => job.id !== id);

		const newData = [...notSame];

		setAllJobs(newData);

		localStorage.setItem("jobs", JSON.stringify(newData));

		closeModal();
	};

	const closeModal = () => {
		setDeleteModal(!deleteModal);
	};

	return (
		deleteModal && (
			<>
				<div className="overlay"></div>

				<div className="delete-modal">
					<div className="delete-text">
						<div className="delete-icon">
							<ErrorOutlineIcon fontSize="large" sx={{ color: red["A400"] }} />
						</div>
						<h2>Are you sure you want to delete this job?</h2>
					</div>

					<div className="delete-action">
						<Button className="cancel" onClick={closeModal} variant="contained">
							Cancel
						</Button>

						<Button
							className="delete-button"
							onClick={() => {
								deleteTodo(todoId);
							}}
							variant="contained"
							color="error"
						>
							Approve
						</Button>
					</div>
				</div>
			</>
		)
	);
}
