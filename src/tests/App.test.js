import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('#Requisito 1 -> Teste o componente <App.js />', () => {
  it('Verifica se os links de navegação são renderizados', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    const linkAbout = screen.getByRole('link', { name: 'About' });
    const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(linkHome).toBeDefined();
    expect(linkAbout).toBeDefined();
    expect(linkFavorites).toBeDefined();
  });
  it('Verifica se o link "home" encaminha para o "/"', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });

    userEvent.click(linkHome);
    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });
  it('Verifica se o link "About" encaminha para o "/about"', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });

    userEvent.click(linkAbout);
    const { pathname } = history.location;

    expect(pathname).toBe('/about');
  });
  it('Verifica se o link "Favorite Pokémons" encaminha para o "/favorites"', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(linkFavorites);
    const { pathname } = history.location;

    expect(pathname).toBe('/favorites');
  });
  it('Verifica se o link "Favorite Pokémons" encaminha para o "/favorites"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/testNaoExiste');

    const pageInvalidTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });

    expect(pageInvalidTitle).toBeInTheDocument();
  });
});
