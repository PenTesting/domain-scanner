'use strict';

const assert = require('assert');
const domainScanner = require('../index.js');

describe('domainScanner', () => {
  it('exports by default a function', () => {
    assert(typeof domainScanner === 'function', 'should export a function');
  });

  describe('getTasks: List module existing tasks', () => {
    it('is defined', () => {
      expect(domainScanner.getTasks).toBeDefined();
    });

    it('return an array of strings', () => {
      let tasks = domainScanner.getTasks();
      expect(Array.isArray(tasks)).toBeTruthy();
      tasks.forEach(t => {
        expect(typeof t).toBe('string');
      });
    });
  });

  describe('extractKeys: Reduce the object keys based on array values match', () => {
    it('is defined', () => {
      expect(domainScanner.extractKeys).toBeDefined();
    });

    it('reduce object keys based on input', () => {
      let obj = {
        domain: '',
        emails: '',
        robots: ''
      };

      let reduced = domainScanner.extractKeys(obj, ['domain']);

      expect(reduced).toHaveProperty('domain', '');
      expect(Object.keys(reduced).length).toBe(1);
    });
  });
});