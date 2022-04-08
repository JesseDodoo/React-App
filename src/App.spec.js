import { screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', ()=> {
    beforeEach(() => render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    ))

    test('The Nav has a Home tag', () => {
        const header = screen.getByRole('navigation');
        expect(header.textContent).toContain('Home');
    })


})
