import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Button} from './index';


test('Should show button title', () =>{
  render(<Button title=" Clique Aqui"/>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement.textContent).toBe(" Clique Aqui");
});


test("Calls onClick prop when clicked", () =>{
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} title=" Clique Aqui" />);
  fireEvent.click(screen.getByText(" Clique Aqui"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Doesn't calls onClick prop when button is disabled", () =>{
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} disabled title=" Clique Aqui" />);
  fireEvent.click(screen.getByText(" Clique Aqui"));
  expect(handleClick).toHaveBeenCalledTimes(0);
});
