import React from "react";
import TaskCard from "../../Components/TaskCard";
import { useTasks } from "../../Contexts/TasksContext";
import { CompletedContainer, CompletedTitle, CompletedContent } from "./styles";

function CompletedTasks() {
  const { completedTasks, allTasks, setAllTasks } = useTasks();

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
    <CompletedContainer>
      <CompletedTitle>Completed</CompletedTitle>
      <CompletedContent>
        {completedTasks.map((data) => {
          return (
            <TaskCard data={data} handler={() => handleTaskChange(data.id)} />
          );
        })}
      </CompletedContent>
    </CompletedContainer>
  );
}

export default CompletedTasks;
