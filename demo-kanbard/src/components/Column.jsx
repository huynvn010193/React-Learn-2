import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './scroll.css';
import Task from './Task';
import { colors } from '@atlaskit/theme';

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: ${({ isDraggingOver, isDraggingFrom }) =>
    getBackgroundColor(isDraggingOver, isDraggingFrom)};
  flex-grow: 1;
  min-height: 100px;
`;

const getBackgroundColor = (isDraggingOver, isDraggingFrom) => {
  if (isDraggingOver) {
    return colors.R50;
  }
  if (isDraggingFrom) {
    return colors.T50;
  }
  return colors.N30;
};

export default function Column({ title, tasks, id, isDropDisabled = false }) {
  return (
    <Container className="column">
      <Title
        style={{
          backgroundColor: 'lightblue',
          position: 'stick',
        }}
      >
        {title}
      </Title>
      <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFrom={Boolean(snapshot.draggingFromThisWith)}
          >
            {tasks.map((task, index) => (
              <Task key={index} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
