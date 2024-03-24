function password(obj) {
    if (
        obj &&
        obj.name &&
        obj.birthYear &&
        obj.siteName &&
        typeof obj.birthYear === 'number' &&
        obj.birthYear.toString().length === 4
    ) {
        let output = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
        return output;
    } else {
        return 'invalid';
    }
}
const inputObj = { name: "toky", birthYear: 200, siteName: "Facebook" } ;
console.log(password(inputObj));