import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

export default function KanbanBoard() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((json) => {
        setCompleted(json.filter((task) => task.completed));
        setIncomplete(json.filter((task) => !task.completed));
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    //REMOVE FROM SOURCE ARRAY

    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else if (source.droppableId == 1) {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    // GET ITEM

    const task = findItemById(draggableId, [...incomplete, ...completed]);

    //ADD ITEM
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else if (destination.droppableId == 1) {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }
  };

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: 'center' }}>PROGRESS BOARD</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Column title={'TO DO'} tasks={incomplete} id={'1'} />
        <Column title={'DONE'} tasks={completed} id={'2'} />
        <Column title={'BACKLOG'} tasks={[]} id={'3'} isDropDisabled={true} />
      </div>
    </DragDropContext>
  );
}
