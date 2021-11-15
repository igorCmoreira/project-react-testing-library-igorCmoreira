import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste do componente <Pokemon.js />', () => {
  it('Verifica se é renderizado um card com as informações do pokémon.', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const averageWeight = screen.getByTestId('pokemon-weight');
    const { src, alt } = screen.getByRole('img', { name: 'Pikachu sprite' });

    expect(name).toBeDefined();
    expect(name).toHaveTextContent('Pikachu');
    expect(type).toBeDefined();
    expect(type).toHaveTextContent('Electric');
    expect(averageWeight).toBeDefined();
    expect(averageWeight).toHaveTextContent('6.0 kg');
    expect(src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(alt).toBe('Pikachu sprite');
  });
  it('Verifica se o card do Pokémon indicado na Pokédex contém um link', () => {
    const { history } = renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: 'More details' });

    expect(details).toBeDefined();
    userEvent.click(details);

    const favorite = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });

    userEvent.click(favorite);

    const img = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    const { src, alt } = img;

    expect(src).toBe('http://localhost/star-icon.svg');
    expect(alt).toBe('Pikachu is marked as favorite');

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });
});
