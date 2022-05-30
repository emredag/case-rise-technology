import { Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import JobContext from "../../contexts/JobContext";
import Button from "@mui/material/Button";

function CreateJob() {
	const { allJobs, setAllJobs, allCategory } = useContext(JobContext);

	// *********** Yup Validation ***********
	const validation = Yup.object({
		name: Yup.string().max(255, "Max 255 characters").required("Ürün adı zorunlu"),
		category: Yup.string().typeError("Katagori seçiniz").required("Katagori zorunlu"),
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
					{({ values, handleChange, handleSubmit }) => (
						<>
							<form className="form" onSubmit={handleSubmit}>
								<div className="job-name">
									<label htmlFor="name">Job Name</label>
									<input
										type="text"
										id="name"
										name="name"
										className="job-input"
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
									>
										<option label="Choose" disabled />

										{allCategory.map((item, index) => {
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
									<Button type="submit" variant="contained">
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
