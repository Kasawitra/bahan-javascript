var s = '';

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5 - i; j++) {
        s += ' ';
    }
    for (var k = 0; k <= i; k++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);
