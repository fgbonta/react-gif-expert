import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCetegory />', () => {


    test('debe cambiar el valor de la caja de texto', () => {

        //sujeto de pruebas
        render(<AddCategory onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox');

        //cuando llame el onchange, esta esperando el evento, por eso se lo mando como un object
        fireEvent.input(input, { target: { value: 'Saitama' } });

        //screen.debug();

        expect(input.value).toBe('Saitama');

    });

    test('debe llamar el onNewCategory si el input tiene valor', () => {

        const inputValue = "Saitama";

        // evaluar la fn
        // es un mock (no es la implementacion real de la fn, es una simulacion)
        // al ser un mock tengo un control absoluto de la fn
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');

        //agregar aria-label para que encuentre el formulario
        const form = screen.getByRole('form', { name: "form-add" });

        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);

        fireEvent.submit(form);

        //el input tiene el ultimo valor despues de los eventos (testing library)
        expect(input.value).toBe("");

        //evaluo si la fn fue llamada
        expect(onNewCategory).toHaveBeenCalled();
        //evaluo que se llame un vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //que se llamo con el argumento
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);       

        const form = screen.getByRole('form',{ name: "form-add" });
        fireEvent.submit(form);

        //fn llamada 0 veces
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });


});