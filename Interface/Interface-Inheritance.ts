interface ISum {
    a: number;
    b: number;

    sum(): number;
}

// Interface - Interface --> extends
interface ISub extends ISum {

    sub(): number;
}

// Class - Interface --> implements
class Mathmatics implements ISub {

    a: number;
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    sum(): number {
        return (this.a + this.b);
    }

    sub(): number {
        return (this.a - this.b);
    }
}

var math = new Mathmatics(50, 60);
console.log("Sum: " + math.sum() + " " + "Sub: " + math.sub());

