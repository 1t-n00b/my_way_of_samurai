import { render, screen } from '@testing-library/react';
import App from './App';

import state from "./redux/state";

/*let us1 = new userPost(1, "Hi 45", 45);
let us2 = new userPost(1, "Hello 77777777", 60);
let posts = [
  // {id : 1, message : 'how are u', likesCount : 12},
  // {id : 2, message : 'first post', likesCount : 2}
  us1, us2
]
let dialogs = [
  {id: 1, name: 'Sergey'},
  {id: 2, name: 'Ura'},
  {id: 3, name: 'Sanya'},
  {id: 4, name: 'Vitalya'},
  {id: 5, name: 'Bob'}
];
let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Hello'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'}
]*/
test('renders learn react link', () => {
  render(   <App state={state} />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});