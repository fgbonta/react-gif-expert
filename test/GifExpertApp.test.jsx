import { fireEvent, screen ,render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe hacar match con el SnapShot', () => {

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();

    });    

    test('Debe poder agregar un categoria inexistente', () => {
                
        const category = "valorant";

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: category } });

        expect( input.value ).toBe(category);

        const form = screen.getByRole('form',{ name: 'form-add' });
        fireEvent.submit(form);

        expect( screen.getAllByText(category).length ).toBe(1);
        expect( input.value ).toBe("");

    });

    test('No Debe poder agregar un categoria existente', () => {
                
        const category = "dragon ball";

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: category } });

        expect( input.value ).toBe(category);

        const form = screen.getByRole('form',{ name: 'form-add' });
        fireEvent.submit(form);

        expect( screen.getAllByText(category).length ).toBe(1);
        expect( input.value ).toBe("");

        //repito la carga
        fireEvent.input(input, { target: { value: category } });
        expect( input.value ).toBe(category);
        fireEvent.submit(form);
        expect( input.value ).toBe("");

        expect( screen.getAllByText(category).length ).toBe(1);
        //screen.debug();
    });

});