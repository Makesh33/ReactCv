import React from "react";
import { createRoot } from "react-dom/client";

import Loader from "./components/Loader";
import AppProvider from "./AppProvider";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);
root.render(
	<React.StrictMode>
		<React.Suspense fallback={<Loader message={"Loading..."} />}>
			<AppProvider />
		</React.Suspense>
	</React.StrictMode>
);
