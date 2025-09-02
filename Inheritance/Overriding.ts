class Bank {
    rateOfInterestRate = 0;

    returnROI(): number { //Overriding
        return this.rateOfInterestRate;
    }
}

class ABank extends Bank{

    returnROI(): number { //Overriding
        return 5.1;
    }
}

class BBank extends Bank{

    returnROI(): number { //Overriding
        return 10.5;
    }
}


class CBank extends Bank{

    returnROI(): number {
        return 12.5;
    }
}

var aBank = new ABank();
console.log(aBank.returnROI());

var bBank = new BBank()
console.log(bBank.returnROI());

var cBank = new CBank();
console.log(cBank.returnROI());