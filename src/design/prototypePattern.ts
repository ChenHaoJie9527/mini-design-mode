class Prototype {
  primitive: any;
  component: object;
  circularReference: ComponentWithBackReference;

  clone(): this {
    const clone = Object.create(this);
    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: {
        ...this,
      },
    };

    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;
  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

export {};
