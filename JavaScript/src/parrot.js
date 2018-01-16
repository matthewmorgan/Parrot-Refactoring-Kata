export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};



export class Parrot {
    constructor(type, numberOfCoconuts, voltage, isNailed) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed(){
        throw new Error()
    }

    getBaseSpeed() {
        return 12;
    }
}

export class EuropeanParrot extends Parrot {
  constructor(numberOfCoconuts){
    super(PARROT_TYPES.EUROPEAN, numberOfCoconuts)
  }

  getSpeed() {
      return this.getBaseSpeed()
  }
}


export class AfricanParrot extends Parrot {
  constructor(numberOfCoconuts, isNailed){
    super(PARROT_TYPES.AFRICAN, numberOfCoconuts, 0, isNailed)
  }

  getSpeed(){
    return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
  }
  getLoadFactor() {
    return 9;
  }
}

export class NorwegianParrot extends Parrot {
  constructor(numberOfCoconuts, voltage, isNailed){
    super(PARROT_TYPES.NORWEGIAN_BLUE, numberOfCoconuts, voltage, isNailed)
  }

  getSpeed(){
    return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
  }

  getBaseSpeedWithVoltage(voltage) {
    return Math.min(24, voltage * this.getBaseSpeed());
  }
}


