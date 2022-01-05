import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting Component', () => {
    test('Hello World text is present', () => {
        render(<Greeting/>)

        const titleElement = screen.getByText(/hello world!/i)
        expect(titleElement).toBeInTheDocument()
    })

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting/>)

        const paragraphElement = screen.getByText('good to see you', {exact: false})
        expect(paragraphElement).toBeInTheDocument()
    })

    test('renders "Changed!" if the button was clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const paragraphElement = screen.getByText('Changed!')
        expect(paragraphElement).toBeInTheDocument()
    })

    test('NOT renders "good to see you!" if the button was clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const paragraphElement = screen.queryByText('good to see you', {exact: false})
        expect(paragraphElement).toBeNull()
    })
})
