import { screen, within } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', ()=> {
    beforeEach(() => render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    ))

    test('The Nav has a Home element', () => {
        const header = screen.getByRole('navigation');
        expect(header.textContent).toContain('Home');
    })

})

describe('BackButton', () => {
    beforeEach(() => {
        render(<App />, { wrapper: MemoryRouter });
    })

    test('renders a back button', () => {
        const btn = screen.getByRole('button')
        expect(btn.textContent).toContain('Back');
    })
})
