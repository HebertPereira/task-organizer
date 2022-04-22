import React from "react";
import TaskCard from "../../Components/TaskCard";
import { useTasks } from "../../Contexts/TasksContext";

import { AllContainer, AllTitle, AllContent } from "./styles";

function TodayTasks() {
  const { todayTasks, allTasks, setAllTasks } = useTasks();

  const handleTaskChange = (id) => {
    const taskModified = allTasks[id];
    setAllTasks(
      allTasks.map((data) => {
        if (data.id === id) {
          return {
            ...taskModified,
            completed: !allTasks[id].completed,
          };
        } else return data;
      })
    );
  };
  return (
    <AllContainer>
      <AllTitle>All</AllTitle>
      <AllContent>
        {todayTasks.map((data) => {
          return (
            <TaskCard data={data} handler={() => handleTaskChange(data?.id)} />
          );
        })}
      </AllContent>
    </AllContainer>
  );
}

export default TodayTasks;
