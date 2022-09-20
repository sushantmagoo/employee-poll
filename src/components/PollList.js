import { formatDate } from '../utils/helpers';
import { Link } from 'react-router-dom';

const PollList = props => {
	const polls = props.polls;

	return (
		<div>
			{polls.map(poll => (
				<div className="poll center" key={poll.id}>
					<h6>{poll.author}</h6>
					<div>{formatDate(poll.timestamp)}</div>
					<Link to={`/questions/${poll.id}`}>
						<button className="btn">Show</button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default PollList;
