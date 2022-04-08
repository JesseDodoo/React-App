import { screen, within, waitFor } from '@testing-library/react';
import {Quotes} from './index';

import axios from 'axios';
jest.mock('axios')

describe('Quotes', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.useFakeTimers();
    })

    const mockKanyeQuote = {
        quote: 'i am the best rapper alive'
    }

    test('to see if an api request has been made', async () => {
        axios.get.mockResolvedValue({data: mockKanyeQuote});
        render(<Quotes />);
        await waitFor (() => {
            expect(axios.get).toHaveBeenCalled()
        })
    })

    test('it calls the official Kanye api on mount and renders a quote', async () => {
        axios.get.mockResolvedValue({ data: {quote: 'i am the best rapper alive'} })
        render(<Quotes />)
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith("https://api.kanye.rest/")
        })
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
