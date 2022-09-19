import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
	return (
		<div>
			<h1 data-testid="leaders-data">Leaderboard list</h1>

			<table>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Name</th>
						<th>Answered</th>
						<th>Created</th>
					</tr>
				</thead>

				{users.map((val, key) => {
					return (
						<tbody key={key}>
							<tr>
								<td>
									<img
										src={val.avatarURL}
										alt={`Avatar of ${val.name}`}
										className="avatar"
									/>
								</td>
								<td>{val.name}</td>
								<td>{val.answers ? Object.keys(val.answers).length : 0}</td>
								<td>{val.questions ? val.questions.length : 0}</td>
							</tr>
						</tbody>
					);
				})}
			</table>
		</div>
	);
};

export default connect(state => {
	const users = Object.keys(state.users).map(k => state.users[k]);

	return {
		users: users.sort((a, b) => {
			return (
				(b.questions ? b.questions.length : 0) +
				(b.answers ? Object.keys(b.answers).length : 0) -
				((a.questions ? a.questions.length : 0) +
					(a.answers ? Object.keys(a.answers).length : 0))
			);
		})
	};
})(Leaderboard);
