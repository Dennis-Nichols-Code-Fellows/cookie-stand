'use strict';


// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

// Each cookie stand location should have a separate render() method that creates and appends its row to the table

// The header row and footer row are each created in their own stand-alone function
// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).


// Create times array needed for generating lists later on

let times_array = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Create function for render table

let table = document.createElement('table');

let make_table = function () {
  document.body.appendChild(table);
  table.style.width = '100%';
  table.style.border = '1px solid black';
};

make_table();

// create function to render header row

let create_header = function () {
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
};

create_header();

// Create function to render footers



// Create Store Class

class Store {
  constructor(location, min_hr, max_hr, avg_cookies) {
    this.location = location;
    this.min_hr = min_hr;
    this.max_hr = max_hr;
    this.avg_cookies = avg_cookies;
  }
  rand_cust_hr() {
    let rand_cust = Math.floor(Math.random() * ((this.max_hr - this.min_hr) + 1));
    return rand_cust;
  }
  gen_sales_array() {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
  render_row() {
    //create and append new row element to table
    let loc_sales = this.gen_sales_array();
    let new_row = document.createElement('tr');
    table.appendChild(new_row);
    //create and append new td element for each hour to row
    for (let i = 0; i < loc_sales.length; i++) {
      let new_td = document.createElement('td');
      new_td.innerHTML = loc_sales[i];
      

  }
}

// Instantiate store objects

const seattle = new Store('Seattle',23,65,6.3);
const tokyo = new Store('Tokyo',3,24,1.2);
const dubai = new Store('Dubai',11,38,3.7);
const paris = new Store('Paris',20,38,2.3);
const lima = new Store('Lima',2,16,4.6);

// Put store objects in an array

let store_array = [seattle, tokyo, dubai, paris, lima];





// // Make a function to sum the values in the array

// let sumArray = function (array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// };

// // Create function to display sales lists to the DOM

// const displaySales = function () {

//   for (let i = 0; i < store_array.length; i++) {
//     // Create basic html elements for each store section
//     let section = document.createElement('section');
//     let title = document.createElement('h2');
//     let list = document.createElement('ul');

//     // Generate hourly sales array for each object using its gen_sales_array  method
//     let loc_sales = store_array[i].gen_sales_array();

//     // Append html elements to the DOM
//     document.body.appendChild(section);
//     title.innerHTML = store_array[i].location;
//     section.appendChild(title);
//     section.appendChild(list);

//     // Generate li elements for hourly sales and append them to the unordered list
//     for (let i = 0; i < loc_sales.length; i++) {
//       let list_el = document.createElement('li');
//       list_el.innerHTML = `${times_array[i]}: ${loc_sales[i]} cookies`;
//       list.appendChild(list_el);
//     }

//     // Generate total sum for hourly sales and append it the to the unordered list
//     let sum_element = document.createElement('li');
//     sum_element.innerHTML = `Total: ${sumArray(loc_sales)} cookies`;
//     list.appendChild(sum_element);
//   }
// };

// Invoke function to display sales lists

// displaySales();
