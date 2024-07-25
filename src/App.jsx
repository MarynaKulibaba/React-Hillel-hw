import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route
                path="/todo-items/:id"
                element={<TodoDetailsWithLocation />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const TodoDetailsWithLocation = () => {
  const location = useLocation();
  return <TodoDetails location={location} />;
};

export default App;
