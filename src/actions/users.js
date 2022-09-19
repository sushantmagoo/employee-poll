export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER_POLL = 'UPDATE_USER_POLL';
export const UPDATE_USER_VOTE = 'UPDATE_USER_VOTE';

export function updateUserPoll({ poll }) {
	return {
		type: UPDATE_USER_POLL,
		poll
	};
}

export function updateUserVote(vote) {
	return {
		type: UPDATE_USER_VOTE,
		vote
	};
}

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}
