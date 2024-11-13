import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Dialog';


// This test suite tests the modal functionality in the Dialog component
describe('Modal functionality', () => {
   test('opens modal when "Open Modal" button is clicked', async () => {
    // Step 1: Render the Dialog component
    render(<Modal />);

    // Step 2: Find the button that triggers opening the modal
    const openModalButton = screen.getByText(/open modal/i);

    // Step 3: Simulate a click on the button
    fireEvent.click(openModalButton);

    // Step 4: Assert the modal content is visible
    const modalContent = screen.getByText(/this is the content/i);
    expect(modalContent).toBeInTheDocument();
    
    // Step 5 run Evinced
    const evincedResult = await EvincedUT.analyzeModal(
      {launcherLocator: {id: "openModal"}},
      {modalLocator: {id: "closeModal"}}
    )

    expect(modalContent).toBeInTheDocument();
  });

});
