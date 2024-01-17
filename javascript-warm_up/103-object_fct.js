const myObject = {
  type: 'object',
  value: 12,
  incr: function() {
    this.value++;
  }
};

function incrValue(obj) {
  obj.value++;
}

console.log(myObject);

incrValue(myObject);
console.log(myObject);

incrValue(myObject);
console.log(myObject);

incrValue(myObject);
console.log(myObject);






  