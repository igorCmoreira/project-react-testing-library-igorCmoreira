import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

describe('#Requisito 2-> Teste o componente <About.js />.', () => {
  it('Verifica se a um "h2" com o texto "About Pokédex."', () => {
    renderWithRouter(<About />);

    const pageTitle = screen.getByRole('heading', { name: 'About Pokédex' });

    expect(pageTitle).toBeDefined();
  });
  it('Verifica se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);

    const paragraph1 = screen.getByText(/This application/i);
    const paragraph2 = screen.getByText(/One can filter/i);

    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });
  it('Verifica se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const { src } = screen.getByRole('img');

    expect(src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
