import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//hacer el mock del hook (simular)
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar inicialmente el loading', () => {

        //como va funcionar ese hook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        //screen.debug();

        expect(screen.getByText('cargando..')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'uBRwFMpdukW1hf8yqS',
                title: 'Esports Summon GIF by VALORANT',
                url: 'https://media4.giphy.com/media/uBRwFMpdukW1hf8yqS/giphy-downsized-medium.gif?cid=f6529370t4n04bel6jzniuvup3zfreme7xysdvg3f1nv2cyt&rid=giphy-downsized-medium.gif&ct=g'
            },
            {
                id: 'jRtZJvoWxWVJ7uF1cx',
                title: 'Playoffs Legends GIF by VALORANT Esports',
                url: "https://media4.giphy.com/media/jRtZJvoWxWVJ7uF1cx/giphy.gif?cid=f6529370t4n04bel6jzniuvup3zfreme7xysdvg3f1nv2cyt&rid=giphy.gif&ct=g"
            }
        ];

        //como va funcionar ese hook
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        //screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});