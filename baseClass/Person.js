class Person {
    constructor(name) {
        this.name = name;

        this.setAttribute = function (name, value) {
            this[name] = value;
        };

        this.getAttribute = function (name) {
            return this[name];
        };
    }
}

