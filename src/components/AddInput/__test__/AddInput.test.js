import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';
const mockedSetTodo = jest.fn();

describe('AddInput', () => {
  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEle = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputEle).toBeInTheDocument();
  });

  it('should be able type into input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEle = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputEle, { target: { value: 'go to bank' } });
    expect(inputEle.value).toBe('go to bank');
  });

  it('should have empty input add button click', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEle = screen.getByPlaceholderText(/Add a new task here.../i);
    const btnEle = screen.getByRole('button', { name: /Add/i });
    fireEvent.change(inputEle, { target: { value: 'go to bank' } });
    fireEvent.click(btnEle);
    expect(inputEle.value).toBe('');
  });
});
