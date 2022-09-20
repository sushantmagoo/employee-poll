import { useEffect, Fragment } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Poll from './Poll';
import Nav from './Nav';
import NewPoll from './NewPoll';
import Login from './Login';
import Error from './Error';

const App = ({ dispatch, loggedIn }) => {
	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	return (
		<Fragment>
			<LoadingBar />
			{loggedIn !== true ? (
				<div className="container">
					<Login />
				</div>
			) : (
				<div className="container">
					<Nav />
					<hr />
					<Routes>
						<Route path="/" exact element={<Dashboard />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="/new" element={<NewPoll />} />
						<Route path="/questions/:id" element={<Poll />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</div>
			)}
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser }) => ({
	loggedIn: authedUser !== null
});

export default connect(mapStateToProps)(App);
