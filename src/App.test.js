import {render, screen, fireEvent, getAllByTestId, findAllByTestId} from '@testing-library/react'
import Home from './pages/Home'
import Total from './components/Total'

//get two random cards on first render and after clicking the deal button
test("on initial render, two cards are displayed", () => {
    const { getAllByTestId } = render(<Home />);
    const cards = getAllByTestId('test-card');
    expect(cards.length).toEqual(2);
  });
  
  test("two new cards should be displayed after clicking the button", () => {
    const { getAllByTestId, getByTestId } = render(<Home />);
    const dealButton = getByTestId('deal');
    fireEvent.click(dealButton);
    const cards = getAllByTestId('test-card');
    expect(cards.length).toEqual(2);
  });

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