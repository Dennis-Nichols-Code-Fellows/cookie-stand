'use strict';

// Create times array needed for generating lists later on, create table variable

let times_array = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let table = document.createElement('table');

// Create Store CLASS

class Store {
  constructor(location, min_hr, max_hr, avg_cookies) {
    this.location = location;
    this.min_hr = min_hr;
    this.max_hr = max_hr;
    this.avg_cookies = avg_cookies;
    this.sales_array = this.gen_sales_array();
  }
}

// Create STORE PROTOTYPE Methods

Store.prototype.rand_cust_hr = function () {
  let rand_cust = Math.floor(Math.random() * ((this.max_hr - this.min_hr) + 1));
  return rand_cust;
};

Store.prototype.gen_sales_array = function () {
  let sales_array = [];
  for (let i = 0; i < 14; i++) {
    let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
    sales_array.push(hour_sales);
  }
  return sales_array;
};

Store.prototype.render_row = function () {
  //create and append new row element to table
  // Object.assign(lookup, {this.location: [...this.sales_array]} )
  let new_row = document.createElement('tr');
  table.appendChild(new_row);
  let row_lbl = document.createElement('td');
  row_lbl.innerHTML = this.location;
  new_row.appendChild(row_lbl);
  //create and append new td element for each hour to row
  for (let i = 0; i < this.sales_array.length; i++) {
    let new_td = document.createElement('td');
    new_td.innerHTML = this.sales_array[i];
    new_row.appendChild(new_td);
  }
  let rw_total = document.createElement('th');
  rw_total.innerHTML = sumArray(this.gen_sales_array());
  new_row.appendChild(rw_total);
};


// Instantiate store objects

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);

// Put store objects in an array

let store_array = [seattle, tokyo, dubai, paris, lima];

// Make a function to sum the values in the array

let sumArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// Create function for render TABLE

const make_table = function () {
  document.body.appendChild(table);
  table.style.width = '100%';
  table.style.border = '1px solid black';
};

// create function to render HEADER row

const create_header = function () {
  //make row for header
  let hdr_row = document.createElement('tr');
  table.appendChild(hdr_row);

  //add blank cell to improve look
  let blank_cell = (document.createElement('td'));
  blank_cell.innerHTML = '&nbsp;';
  hdr_row.appendChild(blank_cell);

  //add header elements to row
  for (let i = 0; i < times_array.length; i++) {
    let hdr = document.createElement('th');
    hdr.setAttribute('scope', 'column');
    hdr.innerHTML = times_array[i];
    hdr_row.appendChild(hdr);
  }
  let lbl_cell = (document.createElement('td'));
  lbl_cell.innerHTML = 'Daily Store Totals';
  hdr_row.appendChild(lbl_cell);
};


// Create function to render FOOTER

const create_footer = function () {
  let ftr_row = document.createElement('tr');
  table.appendChild(ftr_row);

  //add blank cell to improve look
  let ttl_cell = (document.createElement('td'));
  ttl_cell.innerHTML = 'Totals';
  ftr_row.appendChild(ttl_cell);

  //add hourly totals
  let overall_total = 0;
  for (let i = 0; i < times_array.length; i++) {
    let hr_total = 0;
    for (let j = 0; j < store_array.length; j++) {
      hr_total += store_array[j].sales_array[i];
    }
    let hr_ttl_cell = document.createElement('td');
    hr_ttl_cell.innerHTML = hr_total;
    ftr_row.appendChild(hr_ttl_cell);
    overall_total += hr_total;
  }
  let ovr_tot_cell = document.createElement('th');
  ovr_tot_cell.innerHTML = overall_total;
  ftr_row.appendChild(ovr_tot_cell);
};


// Make display function

const displayTable = function () {
  make_table();
  create_header();
  for (let i = 0; i < store_array.length; i++) {
    store_array[i].render_row();
  }
  create_footer();
};

// Invoke display function

displayTable();



