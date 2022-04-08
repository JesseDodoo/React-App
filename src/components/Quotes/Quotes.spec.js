import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Quotes} from './index';
import axios from 'axios';
jest.mock('axios')

describe('Quotes', () => {
    beforeEach(() => jest.resetAllMocks())

    const mockKanyeQuote = {
        quote: 'i am the best rapper alive'
    }

    test('to see if an api request has been made', async () => {
        axios.get.mockResolvedValue({data: mockKanyeQuote});
        render(<Quotes />);
        expect(axios.get).toHaveBeenCalled()
    })
})

describe('Quotes', ()=> {
    beforeEach(() => render(
        <Quotes />
    ))

        test('to see if a quote is rendered', () => {
            const quotes = screen.getByRole('quotes');
            expect(quotes).toBeInTheDocument()
        })
    

})
