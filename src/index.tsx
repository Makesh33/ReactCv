import React from "react";
import ReactDOM from "react-dom";

import AppProvider from "./AppProvider";
import Loader from "./components/Loader";

ReactDOM.render(
	<React.StrictMode>
		<React.Suspense fallback={<Loader message={"Loading..."} />}>
			<AppProvider />
		</React.Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);
