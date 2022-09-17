import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import PostForm from './PostForm';
import SignupForm from './SignupForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fundraisers/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<SignupForm />);
  const linkElement = screen.getByText(/Sign up/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<PostForm />);
  const linkElement = screen.getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<HowItWorks />);
  const linkElement = screen.getByText(/How Go Food Me Works/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/CONTACT US/i);
  expect(linkElement).toBeInTheDocument();
});