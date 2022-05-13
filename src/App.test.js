import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import App from './App';
import { ItemProvider } from './context/ItemProvider';
import { waitFor } from '@testing-library/react';

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
test.skip('user can add item to shopping list', async () => {
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

test.skip('user can delete item from the shopping list', async () => {
  render(
    <ItemProvider>
      <App />
    </ItemProvider>
  );
  const eggs = screen.getByPlaceholderText(/list item: eggs/i);
  const deleteEggs = screen.getByRole('button', { name: /delete eggs/i });

  expect(eggs).toBeInTheDocument();
  expect(deleteEggs).toBeInTheDocument();
  userEvent.click(deleteEggs);
  screen.debug();
  expect(eggs).not.toBeInTheDocument();
  // await waitFor(() => {
  // });
});

//    editing a list item, and
test('user can edit an item in the shopping list', async () => {
  render(
    <ItemProvider>
      <App />
    </ItemProvider>
  );
  const eggs = screen.getByPlaceholderText(/list item: eggs/i);
  const editButton = screen.getByPlaceholderText(/edit button for eggs/i);
  expect(eggs).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  userEvent.click(editButton);
  const eggsTextbox = screen.getByPlaceholderText(/editing eggs/i);
  expect(eggsTextbox).toBeInTheDocument();
  const Savebutton = screen.getByPlaceholderText(/savebutton for eggs/i);
  userEvent.type(eggsTextbox, ' Jumbo');
  userEvent.click(Savebutton);
  screen.debug();
  const eggsJumbo = screen.getByPlaceholderText(/list item: eggs jumbo/i);
  expect(eggsJumbo).toBeInTheDocument();
});
