'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedArray = sourceString
    .split(';')
    .map((el) => el.trim().split(':'))
    .filter((el) => el.length === 2)
    .map((el) => [el[0].trim(), el[1].trim()]);

  const resultedObject = Object.fromEntries(cleanedArray);

  return resultedObject;
}

module.exports = convertToObject;
