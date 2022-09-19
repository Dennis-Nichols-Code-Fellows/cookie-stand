// Create times array needed for generating lists later on

let times_array = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Create store objects

let seattle = {

  location: 'Seattle',
  min_hr: 23,
  max_hr: 65,
  avg_cookies: 6.3,
  // Got the idea to add 1 to make this inclusive from the example in class which was in turn from the MDN docs
  rand_cust_hr: function () {
    let rand_cust = Math.floor(Math.random() * ((this.max_hr - this.min_hr) + 1));
    return rand_cust;
  },
  gen_sales_array: function () {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
};


let tokyo = {

  location: 'Tokyo',
  min_hr: 3,
  max_hr: 24,
  avg_cookies: 1.2,
  // Got the idea to add 1 to make this inclusive from the example in class which was in turn from the MDN docs
  rand_cust_hr: function () {
    let rand_cust = Math.floor(Math.random() * ((this.max_hr - this.min_hr) + 1));
    return rand_cust;
  },
  gen_sales_array: function () {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
};


let dubai = {

  location: 'Dubai',
  min_hr: 11,
  max_hr: 38,
  avg_cookies: 3.7,
  // Got the idea to add 1 to make this inclusive from the example in class which was in turn from the MDN docs
  rand_cust_hr: function () {
    let rand_cust = Math.floor(Math.random() * ((this.max_hr - this.min_hr) + 1));
    return rand_cust;
  },
  gen_sales_array: function () {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
};

let paris = {

  location: 'Paris',
  min_hr: 20,
  max_hr: 38,
  avg_cookies: 2.3,
  // Got the idea to add 1 to make this inclusive from the example in class which was in turn from the MDN docs
  rand_cust_hr: function () {
    let rand_cust = Math.floor(Math.random() * ((this.max_hr - this.min_hr) + 1));
    return rand_cust;
  },
  gen_sales_array: function () {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
};

let lima = {

  location: 'Lima',
  min_hr: 2,
  max_hr: 16,
  avg_cookies: 4.6,
  // Got the idea to add 1 to make this inclusive from the example in class which was in turn from the MDN docs
  rand_cust_hr: function () {
    let rand_cust = Math.floor(Math.random() * ((this.max_hr - this.min_hr) + 1));
    return rand_cust;
  },
  gen_sales_array: function () {
    let sales_array = [];
    for (let i = 0; i < 14; i++) {
      let hour_sales = Math.floor(this.avg_cookies * this.rand_cust_hr());
      sales_array.push(hour_sales);
    }
    return sales_array;
  }
};

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

// Create function to display sales lists to the DOM

const displaySales = function () {

  for (let i = 0; i < store_array.length; i++) {
    // Create basic html elements for each store section
    let section = document.createElement('section');
    let title = document.createElement('h2');
    let list = document.createElement('ul');

    // Generate hourly sales array for each object using its gen_sales_array  method
    let loc_sales = store_array[i].gen_sales_array();

    // Append html elements to the DOM
    document.body.appendChild(section);
    title.innerHTML = store_array[i].location;
    section.appendChild(title);
    section.appendChild(list);

    // Generate li elements for hourly sales and append them to the unordered list
    for (let i = 0; i < loc_sales.length; i++) {
      let list_el = document.createElement('li');
      list_el.innerHTML = `${times_array[i]}: ${loc_sales[i]} cookies`;
      list.appendChild(list_el);
    }

    // Generate total sum for hourly sales and append it the to the unordered list
    let sum_element = document.createElement('li');
    sum_element.innerHTML = `Total: ${sumArray(loc_sales)} cookies`;
    list.appendChild(sum_element);
  }
};

// Invoke function to display sales lists

displaySales();
