class Contractor {
  constuctor(name, role) {
    this._name = name;
    this._role = role;

    get name(){
      return this._name
    }

    get role(){
      return this._role
    }
  }
}

class Front extends Contractor{
  constuctor(name, role, tech)
  super(name, role)
  this._tech = tech

  get tech(){
    return this._tech
  }
}

class Back extends Contractor {
  constuctor(name, role, tech)
  super(name, role)
  this_tech = tech

  get tech(){
    return this._tech
  }
}