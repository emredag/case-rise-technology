import React from "react";
import CreateJob from "../components/CreateJob";
import Footer from "../components/Footer";
import Header from "../components/Header";


function IndexPage() {
	return (
		<>
			<div className="index-page">
				
				<Header />

				<CreateJob />

			</div>

			<Footer />

		</>
	);
}

export default IndexPage;