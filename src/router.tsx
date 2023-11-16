import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Tasks from "./pages/Tasks/Tasks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route index path="/tasks" element={<Tasks />} />
    </>
  )
);

export default router;
