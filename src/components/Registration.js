import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FormStyle from './components/FormStyle';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут ви можете виконати валідацію та відправити дані на сервер
    console.log('Відправлені дані:', formData);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="FormStyle.container">
        <h2 className='mb-4'>Реєстрація</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Ім'я користувача
            </label>
            <div/>
            <input
              type="text"
              className="FormStyle.form-control-sm"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div/>
            <input
              type="email"
              className="FormStyle.form-control-sm"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Пароль
            </label>
            <div/>
            <input
              type="password"
              className="FormStyle.form-control-sm"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Підтвердіть пароль
            </label>
            <div/>
            <input
              type="password"
              className="FormStyle.form-control-sm"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;