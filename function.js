var n = function(object) {
    return object.a + object.b + object.c + object.d;
}

const result = n({a: 1, b: 2, c: 3, d: 4});
console.log(result);

var dateChecker = function() {
    return;
    var date = new Date();
    console.log(date);
};
dateChecker();

var a = {
    b: function() {
        return;
    }
};

let mother = function(func) {
    func();
};

let childern = function() {
    console.log("안녕하세요");
};
mother(childern);