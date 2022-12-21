const hours = +prompt('Enter number of hours')

const result = !isNaN(hours) ? hours * 3600 : `Error!`
alert(`${result}`);