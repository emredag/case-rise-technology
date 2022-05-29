import React from "react";
import IndexPage from "./pages/IndexPage";
import "./styles/style.scss";
import "./styles/reset.scss";
import { JobProvider } from "./contexts/JobContext";



function App() {



	return (
		<>
			<JobProvider>
				<IndexPage />
			</JobProvider>
		</>


	);
}

export default App;
