import React from "react";
import CreateJob from "../components/Create-Job";
import DeleteModal from "../components/Delete-Modal";
import EditModal from "../components/Edit-Modal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JobList from "../components/Job-List/JobList";

function IndexPage() {
	return (
		<>
			<div className="index-page">
				<Header />

				<CreateJob />

				<JobList />
			</div>

			<EditModal />

			<DeleteModal />

			<Footer />
		</>
	);
}

export default IndexPage;
