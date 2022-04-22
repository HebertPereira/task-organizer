import { Route, Routes } from "react-router-dom";
import All from "../Pages/All";
import CompletedTasks from "../Pages/Completed";
import ImportantTasks from "../Pages/Important";
import TodayTasks from "../Pages/Today";
import UpcomingTasks from "../Pages/Upcoming";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/today" element={<TodayTasks />} />
      <Route path="/important" element={<ImportantTasks />} />
      <Route path="/upcoming" element={<UpcomingTasks />} />
      <Route path="/completed" element={<CompletedTasks />} />
    </Routes>
  );
}

export default AppRoutes;
