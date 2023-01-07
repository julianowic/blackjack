import {render, screen, fireEvent, getAllByTestId, findAllByTestId} from '@testing-library/react'
import Home from './pages/Home'
import Total from './components/Total'

//Deal button test
test("on initial render, two cards are displayed", async () => {
    render(<Home />)

    const cards = await screen.findAllByTestId("cards")

    expect(cards.length).toEqual(2)
})

//Total component test
test('total component is visible', () => {
    render(<Total />)
    const total = screen.getByTestId('hand')
    expect(total).toBeInTheDocument()
})

//Deal button test
test("click deal button", () => {
    render(<Home/>)
    const deal = screen.getByTestId('deal')
    expect(deal).toBeInTheDocument()
    fireEvent.click(deal)
})

//Hit button test
test("click deal button", () => {
    render(<Home/>)
    const hit = screen.getByTestId('hit')
    expect(hit).toBeInTheDocument()
    fireEvent.click(hit)
})