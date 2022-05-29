import React from "react";
import CreateJob from "../components/CreateJob";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JobList from "../components/JobList";

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
