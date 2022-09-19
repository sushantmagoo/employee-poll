import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';
import { useNavigate } from 'react-router-dom';

const Nav = ({ currUser, dispatch }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(unsetAuthedUser());
		navigate('/');
	};

	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/">Polls</Link>
				</li>
				<li>
					<Link to="/leaderboard">Leaderboard</Link>
				</li>
				<li>
					<Link to="/new">New</Link>
				</li>
				<li className="user-navbar">
					<img
						src={currUser.avatarURL}
						alt={`Avatar of ${currUser.name}`}
						className="user-profile"
					/>
				</li>
				<li className="user-navbar">{currUser.name}</li>
				<li className="logout">
					<Link to="/" onClick={handleLogout}>
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default connect(({ authedUser, users }) => {
	const currUser = users[authedUser];
	return { currUser };
})(Nav);
