export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
<<<<<<< HEAD
};
=======
};
>>>>>>> eefd22e92e4a642359072dbcafc56e2bbbfdf3f3
