import { BrowserRouter } from "react-router";
import "./App.css";
import Routing from "./routes/Routing";

function App() {
	return (
		<div className="Container">
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</div>
	);
}

export default App;
