import { Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import JobContext from "../../contexts/JobContext";
import Button from "@mui/material/Button";

function CreateJob() {
	const { allJobs, setAllJobs, allCategory } = useContext(JobContext) || {};

	// *********** Yup Validation ***********
	const validation = Yup.object({
		name: Yup.string().max(255, "Max 255 characters").required(""),
		category: Yup.string().typeError("Select Category").required(""),
	});
	// **************************************

	const addTodo = (values) => {
		const newTodos = [...allJobs, values];

		setAllJobs(newTodos);

		localStorage.setItem("jobs", JSON.stringify(newTodos));
	};

	return (
		<>
			<div className="add-job-title">
				<h2>Create New Job</h2>
			</div>
			<div className="create-job">
				<Formik
					initialValues={{
						name: "",
						category: "",
						categoryId: "",
						id: "",
					}}
					validationSchema={validation}
					onSubmit={(values, { resetForm }) => {
						let categoryId;

						if (values.category === "Urgent") {
							categoryId = 1;
						} else if (values.category === "Regular") {
							categoryId = 2;
						} else if (values.category === "Trivial") {
							categoryId = 3;
						}

						const data = {
							name: values.name,
							category: values.category,
							id: allJobs.length + 1,
							categoryId: categoryId,
						};

						addTodo(data);

						setTimeout(() => {
							resetForm();
						}, 100);
					}}
				>
					{({ values, errors, handleChange, handleSubmit }) => (
						<>
							<form className="form" onSubmit={handleSubmit}>
								<div className="job-name">
									<label htmlFor="name">Job Name</label>
									<input
										type="text"
										id="name"
										name="name"
										placeholder="Enter job name"
										data-testid={`create-input ${errors.name && "error"}`}
										className={`job-input ${errors.name && "error"}`}
										value={values.name}
										onChange={handleChange}
									/>
								</div>

								<div className="job-priority">
									<label htmlFor="category">Job Priority</label>
									<select
										name="category"
										value={values.category}
										onChange={handleChange}
										className={errors.category && "error"}
									>
										<option label="Choose" />

										{allCategory?.map((item, index) => {
											return (
												<option
													key={index}
													value={item.job_name}
													label={item.job_name}
												/>
											);
										})}
									</select>
								</div>

								<div className="submit-btn">
									<label htmlFor="">x</label>
									<Button
										data-testid="create-btn"
										type="submit"
										variant="contained"
									>
										Create
									</Button>
								</div>
							</form>
						</>
					)}
				</Formik>
			</div>
		</>
	);
}

export default CreateJob;
