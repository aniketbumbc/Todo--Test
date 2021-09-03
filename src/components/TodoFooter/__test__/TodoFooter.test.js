import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
describe('TodoFooter', () => {
  it('should render the correct amount of incomplete task', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphEle = screen.getByText(/2 tasks left/i);
    expect(paragraphEle).toBeInTheDocument();
  });

  const MockTodoFooter1 = ({ numberOfIncompleteTasks }) => {
    return (
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
      </BrowserRouter>
    );
  };

  it('should render the singular task', async () => {
    render(<MockTodoFooter1 numberOfIncompleteTasks={1} />);
    const paragraphEle = screen.getByText(/1 task left/i);
    expect(paragraphEle).toBeInTheDocument();
  });
});

// it('should render the singular with visiable task', async () => {
//   render(<MockTodoFooter1 numberOfIncompleteTasks={1} />);
//   const paragraphEle = screen.getByText(/1 task left/i);
//   expect(paragraphEle).toBeVisible();
// });

// it('should render the singular with contain task', async () => {
//   render(<MockTodoFooter1 numberOfIncompleteTasks={1} />);
//   const paragraphEle = screen.getByText(/1 task left/i);
//   expect(paragraphEle).toContainHTML('p');
// });
// it('should render the singular with text content task', async () => {
//   render(<MockTodoFooter1 numberOfIncompleteTasks={1} />);
//   const paragraphEle = screen.getByText(/1 task left/i);
//   expect(paragraphEle).toHaveTextContent('1 task left');
// });
