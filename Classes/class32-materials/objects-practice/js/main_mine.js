class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }

  get name() {
    return this._name;
  }

  get role() {
    return this._role;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this._name} and I am on the ${this._role} team.`
    );
  }
}

class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }

  get tech() {
    return this._tech;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this._name} and I am on the ${this._role} team. I specialize in ${tech}`
    );
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this_tech = tech;
  }

  get tech() {
    return this._tech;
  }
}

let Sharon = new Contractor("Sharon", "Contractor", "HTML");

console.log(Sharon);
console.log(Sharon.sayHello());
