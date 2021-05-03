import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {InputText, TextAreaInput} from './index';

//======= InputText Tests =========//
test('Should show inputText title', () =>{
  render(<InputText title="Titulo"/>);
  const inputElement = screen.getByTestId('inputText');
  expect(inputElement.textContent).toBe("Titulo");
});

test('Should show inputText title + required', () =>{
  render(<InputText title="Titulo" required/>);
  const inputElement = screen.getByTestId('inputText');
  expect(inputElement.textContent).toBe("Titulo*");
});

const setupInputText = () => {
  const utils = render(<InputText />);
  const input = utils.getByRole('textbox');
  return {input, ...utils};
};

test("Should allow letters and numbers", () => {
  const {input} = setupInputText();
  fireEvent.change(input, {target: {value: 'abc 123'}});
  expect(input.value).toBe('abc 123');
});

//======= TextArea Tests =========//

test('Should show TextAreaInput title', () =>{
  render(<TextAreaInput title="Titulo TextArea"/>);
  const inputElement = screen.getByTestId('textAreaInput');
  expect(inputElement.textContent).toBe("Titulo TextArea");
});

test('Should show inputText title + required', () =>{
  render(<TextAreaInput title="Titulo TextArea" required/>);
  const inputElement = screen.getByTestId('textAreaInput');
  expect(inputElement.textContent).toBe("Titulo TextArea*");
});

const setupTextArea= () => {
  const utils = render(<TextAreaInput />);
  const input = utils.getByRole('textbox');
  return {input, ...utils};
};

test("Should allow letters and numbers", () => {
  const {input} = setupTextArea();
  fireEvent.change(input, {target: {value: 'abc 123'}});
  expect(input.value).toBe('abc 123');
});