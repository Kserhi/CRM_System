import React, { useState, useEffect } from 'react';

function DataTable() {
    const [data, setData] = useState([
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        completed: false, // По замовчуванню не виконано
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        completed: false, // По замовчуванню не виконано
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        completed: false, // По замовчуванню не виконано
      },
    ]);
  
    const handleCheckboxChange = (id) => {
      // Коли користувач встановлює галочку, ми оновлюємо стан `completed` для відповідного рядка
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    };
  
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ім'я</th>
              <th>Email</th>
              <th>Виконано</th> {/* Новий стовпчик для чекбоксів */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  {/* Чекбокс для встановлення галочки */}
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default DataTable;