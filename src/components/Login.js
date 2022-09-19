import { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const Login = ({ users, dispatch }) => {
	const [user, setUser] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(setAuthedUser(user));
	};

	return (
		<div className="center">
			<h1>Employee Polls</h1>
			<img
				className="main-pic"
				src="/main-pic.png"
				alt="main-pic"
				width="30%"
				height="30%"
			/>
			<h6>Login from listed users</h6>
			<select
				value={user}
				data-testid="select"
				onChange={e => setUser(e.target.value)}
			>
				<option>Please Select a User</option>
				{Object.keys(users).map(k => (
					<option key={users[k].id} value={users[k].id}>
						{users[k].name} ({users[k].id})
					</option>
				))}
			</select>
			<br />
			<button
				data-testid="submit"
				className="btn"
				onClick={handleSubmit}
				disabled={user === ''}
				style={{ cursor: user === '' ? 'not-allowed' : '' }}
			>
				Submit
			</button>
		</div>
	);
};

export default connect(state => {
	return { users: state.users };
})(Login);
