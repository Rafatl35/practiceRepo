
function checkName(name) {
    
    if (typeof name !== 'string' || name.length === 0) {
        return "Invalid";
    }

    const matching = name.charAt(name.length - 1).toLowerCase();

    if (['a', 'y', 'i','e', 'o', 'u', 'w'].includes(matching)) {
        return "Good Name";
    } 
    else{
        return "Bad Name"
    }
}
result= checkName(["Rashed"] );
console.log(result);