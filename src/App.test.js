import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import App from './App';
import { ItemProvider } from './context/ItemProvider';

//*Behavior testing will include a test for
// displaying a list of items
test.skip('page loads with 2 pre-loaded items on shopping list', async () => {
  render(
    <ItemProvider>
      <App />
    </ItemProvider>
  );
  const eggs = screen.getByText(/eggs/i);
  const bread = screen.getByText(/bread/i);
  expect(eggs).toBeInTheDocument();
  expect(bread).toBeInTheDocument();
});

//  adding to list,
test('user can add item to shopping list', async () => {
  render(
    <ItemProvider>
      <App />
    </ItemProvider>
  );
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /submit/i });
  userEvent.type(input, 'Milk');
  expect(input).toHaveValue('Milk');
  userEvent.click(button);
  expect(screen.getByText(/milk/i)).toBeInTheDocument();
  screen.debug();
});
//   deleting from list,
//    editing a list item, and
