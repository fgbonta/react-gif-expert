import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 

    test('Debe regresar el estado inicial', () => { 

        //los hooks necesitan parte del ciclo de vida de los componetes de react
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     });

     test('Debe regresar un arreglo de img y isLoading en falso', async () => { 

        //los hooks necesitan parte del ciclo de vida de los componetes de react
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        //espera que suceda algo
        //al waitFor le pasamos un callback que debe devolver un valor true
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)            
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

     });

 })