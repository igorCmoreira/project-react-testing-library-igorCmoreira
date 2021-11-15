import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('#Requisito 3-> Teste do componente <FavoritePokemons.js />', () => {
  it('Verifica se é exibido na tela a mensagem "No favorite pokemon found".',
    () => {
      renderWithRouter(<FavoritePokemons />);

      const notFoundText = screen.getByText(/no favorite pokemon found/i);

      expect(notFoundText).toBeDefined();
    });
  it('Verifica se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const more = screen.getByRole('link', { name: 'More details' });

    userEvent.click(more);

    const check = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });

    userEvent.click(check);

    const linkFav = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(linkFav);

    const pokemonFav = screen.getByText(/pikachu/i);

    expect(pokemonFav).toBeDefined();
  });
});
