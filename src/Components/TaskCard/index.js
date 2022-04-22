import React from 'react';

import { TaskCardContainer, TaskCardIconBox, TaskCardTitle } from './styles';

import ClockIcon from '../../Assets/icons/clock.png';
import StarIcon from '../../Assets/icons/star.png';
import CalendarIcon from '../../Assets/icons/calendar.png';
import CheckIcon from '../../Assets/icons/check.png';

const TaskCard = ({ data, handler }) => {
  const switchImage = (type) => {
    switch (type) {
      case 'todayTasks':
        return <img src={ClockIcon} alt="clock icon" />;
      case 'importantTasks':
        return <img src={StarIcon} alt="star icon" />;
      case 'upcomingTasks':
        return <img src={CalendarIcon} alt="calendar icon" />;
      default:
        return <img src={ClockIcon} alt="clock icon" />;
    }
  };
  return (
    <TaskCardContainer onClick={() => handler()}>
      <TaskCardTitle>
        <div>
          {data?.completed ? (
            <img src={CheckIcon} alt="check icon" />
          ) : (
            <section />
          )}
        </div>
        <span>{data?.text}</span>
      </TaskCardTitle>
      <TaskCardIconBox>{switchImage(data.type)}</TaskCardIconBox>
    </TaskCardContainer>
  );
};

export default TaskCard;
