import "./App.css";
import DatabaseEmailPage from "./pages/DatabaseEmailPage";
import FoodStore from "./pages/FoodStore";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="App">
      <FoodStore />
      <UsersPage />
      <DatabaseEmailPage />
    </div>
  );
}

export default App;
