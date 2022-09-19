import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { createStore } from 'redux';
import middlewares from '../middlewares';
import reducer from '../reducers';
const store = createStore(reducer, middlewares);
import Leaderboard from '../components/Leaderboard';
import Login from '../components/Login';
import NewPoll from '../components/NewPoll';
import App from '../components/App';

describe('Test page using snapshot', () => {
	it('will check Leaderboard component against snapshot', () => {
		const renderComponent = render(
			<MemoryRouter>
				<Provider store={store}>
					<Leaderboard />
				</Provider>
			</MemoryRouter>
		);
		expect(renderComponent).toMatchSnapshot();
	});

	it('will check if element exist in Login component', () => {
		const { getByText } = render(
			<MemoryRouter>
				<Provider store={store}>
					<Login />
				</Provider>
			</MemoryRouter>
		);
		expect(getByText(/users/i)).toBeInTheDocument();
	});

	it('test Login component select & button are present', () => {
		const component = render(
			<MemoryRouter>
				<Provider store={store}>
					<Login />
				</Provider>
			</MemoryRouter>
		);

		const select = component.getByTestId('select');
		expect(select).toBeInTheDocument();
		const submit = component.queryAllByTestId('submit');
		expect(submit.length).toEqual(1);
	});

	it('will test fireEvent on Select & check button is present', () => {
		const component = render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		);

		const select = component.getByTestId('select');
		fireEvent.change(select, { target: { value: 'tylermcginnis' } });
		const submit = component.getByTestId('submit');
		expect(submit).toBeDisabled();
	});

	it('will check if element exist in NewPoll component', () => {
		const component = render(
			<MemoryRouter>
				<Provider store={store}>
					<NewPoll />
				</Provider>
			</MemoryRouter>
		);

		const header = component.getByTestId('header');
		expect(header).toBeInTheDocument();
	});

	it('will check if element exist in Leaderboard component', () => {
		const { getByText } = render(
			<MemoryRouter>
				<Provider store={store}>
					<Leaderboard />
				</Provider>
			</MemoryRouter>
		);

		expect(getByText(/Leaderboard/i)).toBeInTheDocument();
	});
});
