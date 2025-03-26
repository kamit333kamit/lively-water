import "./styles.css";
import AllPosts from "./AllPosts";
import SinglePostPage from "./SinglePostPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route index path="/" element={<AllPosts />}></Route>
            <Route path="/:id" element={<SinglePostPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
