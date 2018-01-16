const BASE_SPEED = 12

export class Parrot {
  constructor(numberOfCoconuts, voltage, isNailed) {
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed(){
        throw new Error()
    }

    getBaseSpeed() {
        return BASE_SPEED;
    }
}

export class EuropeanParrot extends Parrot {
  getSpeed() {
      return this.getBaseSpeed()
  }
}


export class AfricanParrot extends Parrot {
  constructor(numberOfCoconuts){
    super(numberOfCoconuts, 0, false)
  }

  getSpeed(){
    return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
  }
  getLoadFactor() {
    return 9;
  }
}

export class NorwegianParrot extends Parrot {
  constructor(voltage, isNailed){
    super(0, voltage, isNailed)
  }

  getSpeed(){
    return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
  }

  getBaseSpeedWithVoltage(voltage) {
    return Math.min(24, voltage * this.getBaseSpeed());
  }
}


