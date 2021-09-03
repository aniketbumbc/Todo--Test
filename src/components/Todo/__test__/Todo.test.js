import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputEle = screen.getByPlaceholderText(/Add a new task here.../i);
  const btnEle = screen.getByRole('button');
  tasks.forEach((task) => {
    fireEvent.change(inputEle, { target: { value: task } });
    fireEvent.click(btnEle);
  });
};

describe('Todo', () => {
  it('should renders title correctly', async () => {
    render(<MockTodo />);
    addTask(['Go to Bank']);
    const divEle = screen.getByText(/Go to Bank/i);
    expect(divEle).toBeInTheDocument();
  });

  it('should renders list length correctly', async () => {
    render(<MockTodo />);
    addTask(['Go to Bank', 'clean drawer', 'clea table']);
    const divEle = await screen.findAllByTestId('task-container');
    expect(divEle.length).toBe(3);
  });

  it('should task not have completed class when initial render', () => {
    render(<MockTodo />);
    addTask(['Go to Bank']);
    const divEle = screen.getByText(/Go to Bank/i);
    expect(divEle).not.toHaveClass('todo-item-active');
  });

  it('should task have completed class when clicked', () => {
    render(<MockTodo />);
    addTask(['Go to Bank']);
    const divEle = screen.getByText(/Go to Bank/i);
    fireEvent.click(divEle);
    expect(divEle).toHaveClass('todo-item-active');
  });
});
