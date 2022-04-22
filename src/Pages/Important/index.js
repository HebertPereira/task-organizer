import React from "react";
import TaskCard from "../../Components/TaskCard";
import { useTasks } from "../../Contexts/TasksContext";
import { ImportantContainer, ImportantTitle, ImportantContent } from "./styles";

function ImportantTasks() {
  const { importantTasks, allTasks, setAllTasks } = useTasks();

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
    <ImportantContainer>
      <ImportantTitle>Important</ImportantTitle>
      <ImportantContent>
        {importantTasks.map((data) => {
          return (
            <TaskCard data={data} handler={() => handleTaskChange(data.id)} />
          );
        })}
      </ImportantContent>
    </ImportantContainer>
  );
}

export default ImportantTasks;
