import {render, screen} from '@testing-library/react';
import React from "react";
import App from "./App";

test('renders learn react link', () => {
 // render(   <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>);
 render(    <App
     // store={store}
 />);


  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});