function addMeMaybe (number, theFunction)
{
    number = number + 1
    theFunction(number)
    
}


// has to be called and console.log wiil be in the inner function

module.exports.addMeMaybe = addMeMaybe