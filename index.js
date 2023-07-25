// Write your solution in this file!
const employee = {name: "John Rashid", streetAddress : "123 Street"}

function updateEmployeeWithKeyAndValue(obj, key, value) {
   const newObj = {...obj};
    newObj[key] = value;
   return newObj;   
}
const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam")



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
     obj[key] = value;
    return obj;
}

const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Street")




                function deleteFromEmployeeByKey(obj, key) {
                    const newObj = {...obj};
                    delete newObj[key]
                    return newObj;
                }
                const newEmployee3 = deleteFromEmployeeByKey(employee, "name")



function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj;
}
const newEmployee4 = destructivelyDeleteFromEmployeeByKey(employee, "name") 