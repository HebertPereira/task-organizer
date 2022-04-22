import React, { createContext, useContext, useEffect, useState } from "react";

const TasksMock = [
  { id: 0, text: "Todays task 1", completed: true, type: "todayTasks" },
  { id: 1, text: "Todays task 2", completed: false, type: "todayTasks" },
  { id: 2, text: "Todays task 3", completed: true, type: "todayTasks" },
  { id: 3, text: "Todays task 4", completed: false, type: "todayTasks" },
  { id: 4, text: "Important task 1", completed: false, type: "importantTasks" },
  { id: 5, text: "Important task 2", completed: true, type: "importantTasks" },
  { id: 6, text: "Upcoming task 1", completed: false, type: "upcomingTasks" },
  { id: 7, text: "Upcoming task 2", completed: true, type: "upcomingTasks" },
  { id: 8, text: "Upcoming task 3", completed: false, type: "upcomingTasks" },
];

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  function filterTasks(type) {
    if (
      type === "todayTasks" ||
      type === "importantTasks" ||
      type === "upcomingTasks"
    ) {
      return allTasks.filter((data) => {
        return data.type === type;
      });
    } else {
      return allTasks.filter((data) => {
        return data?.completed === true;
      });
    }
  }

  const [allTasks, setAllTasks] = useState(TasksMock);
  const [todayTasks, setTodayTasks] = useState(filterTasks("todayTasks"));
  const [importantTasks, setImportantTasks] = useState(
    filterTasks("importantTasks")
  );
  const [upcomingTasks, setUpcomingTasks] = useState(
    filterTasks("upcomingTasks")
  );
  const [completedTasks, setCompletedTasks] = useState(
    filterTasks("completed")
  );

  useEffect(() => {
    if (allTasks) {
      setTodayTasks(filterTasks("todayTasks"));
      setImportantTasks(filterTasks("importantTasks"));
      setUpcomingTasks(filterTasks("upcomingTasks"));
      setCompletedTasks(filterTasks("completed"));
    }
  }, [allTasks]);

  return (
    <TasksContext.Provider
      value={{
        allTasks,
        setAllTasks,
        todayTasks,
        importantTasks,
        upcomingTasks,
        completedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}
