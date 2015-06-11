"use strict";

describe("case progress", function()
{
	beforeEach(module('examples'));
	beforeEach(resetLocalStorage);
	beforeEach(window.onload);
	afterEach(resetLocalStorage);


	it('Case 1 progress should be reset', function()
	{
		//var casesComplete
		expect(localStorage.getItem('case1q1')).toBe(0);
		expect(localStorage.getItem('case1q2')).toBe(0);
		expect(localStorage.getItem('case1q3')).toBe(0);
		expect(localStorage.getItem('case1q4')).toBe(0);
		expect(localStorage.getItem('case1q5')).toBe(0);
	});

	it('Total case progress should be reset', function()
	{
		expect(getTotalProgress()).toBe(0);
	});

	it('Total case progress should increment', function()
	{
		//Case 1 is completed
		localStorage.setItem('case1q1', 1);
		localStorage.setItem('case1q2', 1);
		localStorage.setItem('case1q3', 1);
		localStorage.setItem('case1q4', 1);
		localStorage.setItem('case1q5', 1);

		window.onload();

		expect(getTotalProgress()).toBe(1);
	});


});