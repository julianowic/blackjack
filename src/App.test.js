import {render, screen} from '@testing-library/react'
import App from './App'

test('renders Blackjack screen', () => {
    render(<App />)
    const linkElement = screen.getByText("Your total")
    expect(linkElement).toBeInTheDocument()
})