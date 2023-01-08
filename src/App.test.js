import {render, screen, fireEvent} from '@testing-library/react'
import Home from './pages/Home'
import Total from './components/Total'

//Get two random cards on first render and after clicking the deal button
test("on initial render, two cards are displayed", () => {
  render(<Home />)
  const cards = screen.getAllByTestId('test-card')
  expect(cards.length).toEqual(2)
});
  
//Deal button test
test("two new cards should be displayed after clicking the button", () => {
  render(<Home />);
  const dealButton = screen.getByTestId('deal')
  fireEvent.click(dealButton)
  const cards = screen.getAllByTestId('test-card')
  expect(cards.length).toEqual(2)
});

//Total component test
test('should render total passed into total prop', () => {
    render(<Total total="My total"/>)
    const total = screen.getByText(/my total/i)
    expect(total).toBeInTheDocument()
})

//Hit button test and check if the length of cards is greater than 2
test("click hit button", () => {
    render(<Home/>)
    const hit = screen.getByTestId('hit')
    fireEvent.click(hit)
    const cards = screen.getAllByTestId('test-card')
    expect(cards.length).toBeGreaterThan(2)
})