var s = '';

for (var i = 0; i < 11; i++) {
    if (i <=5) {
        for (var j = 0; j <= i; j++) {
            s += '*';
        } 
    } else {
    for (var k = 11; k > i; k--) {
        s += '*';
    } 
}
    s += '\n';
}

console.log(s);