import { _saveQuestionAnswer } from '../actions/shared';

describe('Test _saveQuestionAnswer functionality', () => {
	it('verifies that answers are getting saved', async () => {
		const vote = {
			authedUser: 'tylermcginnis',
			qid: '8xf0y6ziyjabvozdd253nd',
			answer: 'optionOne'
		};
		const result = await _saveQuestionAnswer(vote);
		expect(result).toEqual(true);
	});

	it('verifies that answers also return error', async () => {
		const vote = {
			answer: 'optionOne'
		};
		await expect(_saveQuestionAnswer(vote)).rejects.toEqual(
			'Please provide authedUser, qid, and answer'
		);
	});
});
