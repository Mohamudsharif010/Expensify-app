import {
  addExpense,
  editExpense,
  removeExpense,
} from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New Note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New Note value',
    },
  });
});

test('should set up add expense object with provided values', () => {
  const expenseDate = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent',
  };
  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDate,
      id: expect.any(String),
    },
  });
});

test('should set up add expense object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
