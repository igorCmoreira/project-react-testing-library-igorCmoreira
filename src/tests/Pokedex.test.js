import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('#Requisito 5-> Teste do componente <Pokedex.js />', () => {
  it('Verifica se contém um heading "h2" com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const subTitle = screen.getByRole('heading', { name: 'Encountered pokémons' });

    expect(subTitle).toBeDefined();
  });
  it('Verifica se é exibido o próximo Pokémon da lista quando o botão é clicado', () => {
    renderWithRouter(<App />);

    const bntProximo = screen.getByRole('button', { name: 'Próximo pokémon' });

    expect(bntProximo).toBeDefined();

    userEvent.click(bntProximo);

    let pokemonName = screen.getByText('Charmander');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);

    pokemonName = screen.getByText('Caterpie');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);

    pokemonName = screen.getByText('Ekans');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);

    pokemonName = screen.getByText('Alakazam');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);

    pokemonName = screen.getByText('Mew');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);

    pokemonName = screen.getByText('Rapidash');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);

    pokemonName = screen.getByText('Snorlax');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);

    pokemonName = screen.getByText('Dragonair');

    expect(pokemonName).toBeDefined();

    userEvent.click(bntProximo);
    // Aqui garante que depois do ultimo retorna para o pikachu

    pokemonName = screen.getByText('Pikachu');

    expect(pokemonName).toBeDefined();
  });
  it('Verifica se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);

    const qPokemon = screen.getAllByTestId('pokemon-name');

    expect(qPokemon).toHaveLength(1);
  });
  it('Verifica se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const types = screen.getAllByTestId('pokemon-type-button');
    const size = 7;

    expect(types).toHaveLength(size);

    const electric = screen.getByRole('button', { name: 'Electric' });
    const bntProximo = screen.getByRole('button', { name: 'Próximo pokémon' });

    userEvent.click(electric);
    userEvent.click(bntProximo);

    const checkTypes = screen.getAllByText('Electric');
    const all = screen.getByRole('button', { name: 'All' });

    expect(checkTypes).toHaveLength(2);
    expect(all).toBeDefined();
  });
  it('Verifica se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const firstPokemon = screen.getByText('Pikachu');

    expect(firstPokemon).toBeDefined();

    const fire = screen.getByRole('button', { name: 'Fire' });

    userEvent.click(fire);

    const pokemon = screen.getByText('Charmander');
    const all = screen.getByRole('button', { name: 'All' });

    expect(all).toBeDefined();
    expect(pokemon).toBeDefined();

    userEvent.click(all);
    expect(firstPokemon).toBeInTheDocument();
  });
});
