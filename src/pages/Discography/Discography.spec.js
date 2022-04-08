import { screen, within } from '@testing-library/react';
import {Discography} from './index'

describe('Discography', ()=> {
    beforeEach(() => render(
    <Discography />
    ))

    test('to see if there is a album called College Dropout', () => {

        const firstStory = screen.getAllByRole('listitem')[0];
        expect(firstStory.textContent).toContain('1 College Dropout');
    })

    test('Shows text and image of next album when next button is clicked', () => {
        const nextButton = screen.getByRole('button', { name: 'nextAlbum'});
        userEvent.click(nextButton);

      });
})
