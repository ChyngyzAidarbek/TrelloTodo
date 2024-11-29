// import React, { useState } from "react";
// import styled from "styled-components";

// function MainPage() {
//   const [columns, setColumns] = useState([{ id: 1, title: "", tasks: [] }]);

//   const addColumn = () => {
//     const newColumn = {
//       id: Date.now(),
//       title: `Новая  ${columns.length + 1}`,
//       tasks: [],
//     };
//     setColumns([...columns, newColumn]);
//   };

//   const addTaskToColumn = (columnId, task) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((col) =>
//         col.id === columnId ? { ...col, tasks: [...col.tasks, task] } : col
//       )
//     );
//   };

//   return (
//     <Container>
//       <Board>
//         {columns.map((column) => (
//           <Column key={column.id}>
//             <ColumnHeader>
//               <h3>{column.title}</h3>
//             </ColumnHeader>
//             <TaskList>
//               {column.tasks.map((task, index) => (
//                 <Task key={index}>{task}</Task>
//               ))}
//             </TaskList>
//             <TaskInput
//               placeholder="+ Добавить карточку"
//               onKeyPress={(e) => {
//                 if (e.key === "Enter" && e.target.value.trim()) {
//                   addTaskToColumn(column.id, e.target.value);
//                   e.target.value = "";
//                 }
//               }}
//             />
//           </Column>
//         ))}
//         <AddColumn>
//           <NewColumnInput
//             placeholder="+ Добавьте еще одну колонку"
//             onFocus={addColumn} 
//           />
//         </AddColumn>
//       </Board>
//     </Container>
//   );
// }

// export default MainPage;

// const Container = styled.div`
//   padding: 2rem;
//   background: url("/path/to/your/background.jpg") no-repeat center center;
//   background-size: cover;
//   min-height: 100vh;
//   display: flex;
//   justify-content: start;
//   align-items: flex-start;
// `;

// const Board = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const Column = styled.div`
//   background-color: #282a36;
//   color: white;
//   padding: 1rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
//   width: 250px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const ColumnHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const TaskList = styled.div`
//   margin-top: 1rem;
//   flex-grow: 1;
// `;

// const Task = styled.div`
//   background: #44475a;
//   color: white;
//   padding: 0.8rem;
//   border-radius: 4px;
//   margin-bottom: 0.5rem;
// `;

// const TaskInput = styled.input`
//   padding: 0.8rem;
//   margin-top: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 90%;
// `;

// const AddColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 250px;
//   border: 2px dashed rgba(255, 255, 255, 0.7);
//   border-radius: 8px;
//   padding: 1rem;
//   color: white;
//   cursor: pointer;
//   text-align: center;
// `;

// const NewColumnInput = styled.input`
//   padding: 0.8rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 100%;
//   text-align: center;
//   background: rgba(255, 255, 255, 0.1);
//   color: white;
//   display: flex;
//   flex-wrap: wrap;
// `;
