import { expect } from '@jest/globals';
import { render, fireEvent, } from '@testing-library/react';
import { InputTask } from '../../input-task/input-task';


describe('InputTask component', () => {
  it('renders without crashing', () => {
    const addTaskSpy = jest.fn(); // Создаем псевдофункцию для spy на функцию addTask
    const addTask = (task) => addTaskSpy(task); // Переопределяем addTask для использования spy

    const { container } = render(
      <InputTask addTask={addTask} />
    );
    // Render компонент с нашей функцией addTask

    expect(container).toBeInTheDocument(); // Проверяем, что компонент отображается
  });

  it('calls addTask when button is clicked', () => {
    const task = 'some task';
    const addTaskSpy = jest.fn();
    const addTask = (t) => addTaskSpy(t);

    const { getByPlaceholderText, getByText } = render(
      <InputTask addTask={addTask} />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputField = getByPlaceholderText(/Введите задачу/i);
    fireEvent.change(inputField, { target: { value: task } }); // Вводим значение в input
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText(/Создать/i)); // Нажимаем кнопку

    expect(addTaskSpy).toHaveBeenCalledWith(task); // Проверяем, что addTask была вызвана с правильным значением
  });
});


