import { _saveQuestion } from '../actions/shared';

describe('Test _saveQuestion functionality', () => {
	it('verifies that question are getting saved', async () => {
		const poll = {
			author: 'tylermcginnis',
			optionOneText: 'optionOne',
			optionTwoText: 'optionTwo'
		};
		const result = await _saveQuestion(poll);
		expect(result).toHaveProperty('id');
	});

	it('verifies that question also return error', async () => {
		const poll = {
			optionOneText: 'optionOne',
			optionTwoText: 'optionTwo'
		};
		await expect(_saveQuestion(poll)).rejects.toEqual(
			'Please provide optionOneText, optionTwoText, and author'
		);
	});
});
