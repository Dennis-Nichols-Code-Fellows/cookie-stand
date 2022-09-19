// Lab 06 Todo list

// 1. Store the min/max hourly customers, and the average cookies per customer, in object properties.

// 2. Use a method of that object to generate a random number of customers per hour. Objects/Math/random

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// 5.  Display the values of each array as unordered lists in the browser.

// 6.  Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies

// Create initial object format

let seattle = {

  location: 'Seattle',
  min_hr: 23,
  max_hr: 65,
  avg_cookies: 6.3,
  rand_cust_hr: function() {
    let rand_cust = Math.floor(Math.random() * (this.max_hr - this.min_hr));
    return rand_cust;
  },
  gen_sales_array: function() {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
};

// console.log(seattle.gen_sales_array());

let tokyo = {

  location: 'Tokyo',
  min_hr: 3,
  max_hr: 24,
  avg_cookies: 1.2,
  rand_cust_hr: function() {
    let rand_cust = Math.floor(Math.random() * (this.max_hr - this.min_hr));
    return rand_cust;
  },
  gen_sales_array: function() {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
};


// const displaySales = function() {

// };


