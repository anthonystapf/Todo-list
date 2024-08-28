import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './TaskChart.css'; 

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const TaskChart = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const pendingTasks = totalTasks - completedTasks;

  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [completedTasks, pendingTasks],
        backgroundColor: ['#221426', '#A480F2'],
      },
    ],
  };

  return (
    <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
      <h2 className="chart-container">Progresso das Tarefas</h2>
      <Pie data={data} />
    </div>
  );
};

export default TaskChart;
