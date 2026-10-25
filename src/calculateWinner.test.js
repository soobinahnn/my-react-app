
import test from 'node:test';
import assert from 'node:assert/strict';
import calculateWinner from './calculateWinner.js';

test('X wins across the top row', () => {
  const squares = [
    'X', 'X', 'X',
    'O', 'O', null,
    null, null, null
  ];

  assert.equal(calculateWinner(squares), 'X');
});

test('O wins down the first column', () => {
  const squares = [
    'O', 'X', 'X',
    'O', 'X', null,
    'O', null, null
  ];

  assert.equal(calculateWinner(squares), 'O');
});

test('X wins diagonally', () => {
  const squares = [
    'X', 'O', null,
    'O', 'X', null,
    null, null, 'X'
  ];

  assert.equal(calculateWinner(squares), 'X');
});

test('No winner on an empty board', () => {
  const squares = Array(9).fill(null);

  assert.equal(calculateWinner(squares), null);
});

test('No winner when the game is still in progress', () => {
  const squares = [
    'X', 'O', null,
    null, 'X', null,
    null, null, 'O'
  ];

  assert.equal(calculateWinner(squares), null);
});

test('No winner in a draw', () => {
  const squares = [
    'X', 'O', 'X',
    'X', 'O', 'O',
    'O', 'X', 'X'
  ];

  assert.equal(calculateWinner(squares), null);
});
