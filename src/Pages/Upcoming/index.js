import React from "react";
import TaskCard from "../../Components/TaskCard";
import { useTasks } from "../../Contexts/TasksContext";
import { UpcomingContainer, UpcomingTitle, UpcomingContent } from "./styles";

function UpcomingTasks() {
  const { upcomingTasks, allTasks, setAllTasks } = useTasks();

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
    <UpcomingContainer>
      <UpcomingTitle>Upcoming</UpcomingTitle>
      <UpcomingContent>
        {upcomingTasks.map((data) => {
          return (
            <TaskCard data={data} handler={() => handleTaskChange(data.id)} />
          );
        })}
      </UpcomingContent>
    </UpcomingContainer>
  );
}

export default UpcomingTasks;
