'use strict';

/**
 * Returns the HTML to begin a table with a header row, through the open <tbody>
 * @param {array} Headers - An array of header table cell values
 */
function tableOpen(headers, classes = null, id = null) {
  var table = `<table id="${id}" class="${classes}">`;
  if (headers.length > 0){
    table += '<thead>';
    table += '<tr>';
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr>';
    table += '</thead>';
  }
  table += '<tbody>';
  return table;
}

/**
 * Return the HTML to close a, HTML table opened with tableOpen.
 * Possibly superfluous
 */
function tableClose(){
  return '</tbody></table>';
}

/**
 * Return an HTML table row for an array of cells
 * @param {aray} cells - An array of cell values.
 */
function tableRow(cells){
  var row = '<tr>';
  cells.forEach(cell => {
    row += `<td>${cell}</td>`;
  });
  row += '</tr>';
  return row;
}

/**
 * Master function for headers, in case inline styles are necessary
 * @param {string} text - Text content of the header.
 * @param {integer} l - Heading level.
 * @param {integer} size - Font size in pixels, for inline styling.
 * @param {string} style - additional inline styles.
 */
function heading(text, l, size, style = ''){
  return `<h${l}>${text}</h${l}>`;
}

/**
 * Generate HTML for an H1
 * @param {string} text - Text content.
 */
function h1(text){
  return heading(text, 1, 25);
}

/**
 * Generate HTML for an H2
 * @param {string} text - Text content.
 */
function h2(text){
  return heading(text, 2, 25);
}

/**
 * Generate HTML for an H3
 * @param {string} text - Text content.
 */
function h3(text){
  return heading(text, 3, 16);
}

/**
 * Generate HTML for an H4
 * @param {string} text - Text content.
 */
function h4(text){
  return heading(text, 4, 14);
}

/**
 * Generate HTML for an H5
 * @param {string} text - Text content.
 */
function h5(text){
  return heading(text, 5, 14, 'text-transform: uppercase;');
}

/**
 * Generate HTML for a paragraph
 * @param {string} text - Text content.
 * @param {string} style - additional inline styles.
 */
function p(text, style=''){
  return `<p>${text}</p>`;
}

/**
 * Generate HTML for a list item
 * @param {string} text - Text content.
 * @param {string} style - additional inline styles.
 */
function li(text, style=''){
  return `<li>${text}</li>`;
}

exports.tableOpen = tableOpen;
exports.tableClose = tableClose;
exports.tableRow = tableRow;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.p = p;
exports.li = li;
