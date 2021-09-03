import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders title correctly', () => {
    render(<Header title='My header' />);
    const headingEle = screen.getByText(/my header/i);
    expect(headingEle).toBeInTheDocument();
  });
});

// it('renders title correctly by role', () => {
//   render(<Header title='My header' />);
//   const headingEle = screen.getByRole('heading');
//   expect(headingEle).toBeInTheDocument();
// });

// it('renders title correctly by role', () => {
//   render(<Header title='My header' />);
//   const headingEle = screen.getByRole('heading', { name: 'My header' });
//   expect(headingEle).toBeInTheDocument();
// });
// it('renders title correctly by test-id', () => {
//   render(<Header title='My header' />);
//   const headingEle = screen.getByTestId('cats');
//   expect(headingEle).toBeInTheDocument();
// });

// // find by by async and await

// it('renders title correctly by find-by', async () => {
//   render(<Header title='My header' />);
//   const headingEle = await screen.findByText(/my header/i);
//   expect(headingEle).toBeInTheDocument();
// });

// // query by

// // getAllByRole

// it('renders heading  correctly length', () => {
//   render(<Header title='My header' />);
//   const headingEle = screen.getAllByRole('heading');
//   expect(headingEle.length).toBe(2);
// });
