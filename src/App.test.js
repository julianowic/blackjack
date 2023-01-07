import {render, screen, fireEvent} from '@testing-library/react'
import Home from './pages/Home'
import Total from './components/Total'

//Total component test
test('renders Blackjack screen', () => {
    render(<Total />)
    const total = screen.getByTestId('hand')
    expect(total).toBeInTheDocument()
})

//Deal button test
test("click deal button", () => {
    render(<Home/>)
    const deal = screen.getByTestId('deal')

    fireEvent.click(deal)

    //expect(usersCards).toHaveLength(2)
})

//Hit button test
test("click deal button", () => {
    render(<Home/>)
    const hit = screen.getByTestId('hit')
    expect(hit).toBeInTheDocument()
})