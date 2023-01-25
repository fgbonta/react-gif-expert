import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => { 

    const title = 'One Punch Man GIF';
    const url = 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=f65293704ra1156a44w6mn97vnbpxdui8ndy3pvkvp1gnyj2&rid=giphy.gif&ct=g';
        
    test('Debe hacer match con el snapshot', () => { 

        const { container } = render(<GifItem title={title} url={url} />);        

        expect( container ).toMatchSnapshot();
        
     });

     test('Debe de mostrar la img con el URL y el ALT indicado', () => { 

        render(<GifItem title={title} url={url} />);
        //screen.debug();

        const { src , alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title); 
        
     });

     test('Debe de mostrar el titulo en el componente', () => { 

        const {container } = render(<GifItem title={title} url={url} />);                
        //screen.debug();

        /**
         * son 2 formas de evaluar
         * la segunda es mas precisa
         */
        expect( screen.getByText(title) ).toBeTruthy();
        expect( container.querySelector('div.card > p').innerHTML ).toBe(title); 
        
     })
 });