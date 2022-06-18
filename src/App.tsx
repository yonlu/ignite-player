import { TasksProvider } from "./hooks/useTasks";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <TasksProvider>
      <Dashboard />
    </TasksProvider>
  );
}

export default App;
