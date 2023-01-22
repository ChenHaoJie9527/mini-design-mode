interface Builder {
  reset(): void;
  setSeats(val: number): void;
  setEngine(engine: any): void;
  setTripComputer(val: number): void;
  setGPS(val: string): void;
}

interface ManualCar {
  setPriceText(): void;
  setColor(): void;
  setNameText(): void;
}

/**
 * 汽车生成器
 */
class CarBuilder implements Builder {
  private car: Car | null = null;
  constructor() {
    this.reset();
  }
  /**
   * reset（重置）方法可清除正在生成的对象。
   */
  reset(): void {
    this.car = new Car();
  }

  // 所有生成步骤都会与同一个产品实例进行交互

  /**
   * // 设置汽车座位的数量。
   * @param val number
   */
  setSeats(val: number): void {
    this.car!.seats = val;
  }

  /**
   * 安装指定的引擎。
   * @param engine any
   */
  setEngine(engine: any): void {
    this.car!.engine = engine;
  }

  /**
   * 安装全球定位系统。
   */
  setGPS(val: string): void {
    this.car!.gps = val;
  }
  setTripComputer(val: number): void {
    this.car!.computer = val + "";
  }

  // 具体生成器需要自行提供获取结果的方法。这是因为不同类型的生成器可能
  // 会创建不遵循相同接口的、完全不同的产品。所以也就无法在生成器接口中
  // 声明这些方法（至少在静态类型的编程语言中是这样的）。
  //
  // 通常在生成器实例将结果返回给客户端后，它们应该做好生成另一个产品的
  // 准备。因此生成器实例通常会在 `getProduct（获取产品）`方法主体末尾
  // 调用重置方法。但是该行为并不是必需的，你也可让生成器等待客户端明确
  // 调用重置方法后再去处理之前的结果。
  getResult(): Car {
    const result = this.car!;
    this.reset();
    return result;
  }
}

/**
 * 汽车使用手册生成器
 */
class CarManualBuilder implements ManualCar {
  private manual: CarManual | null = null;
  constructor() {
    this.reset();
  }
  /**
   * reset（重置）方法可清除正在生成的对象。
   */
  reset(): void {
    this.manual = new CarManual();
  }
  setEngine(engine: any): void {}
  setGPS(val: string): void {}
  setSeats(val: number): void {}
  setTripComputer(val: number): void {}
  setPriceText() {
    this.manual!.priceText = "$110";
  }
  setColor() {
    this.manual!.color = "red";
  }
  setNameText() {
    this.manual!.nameText = "hello";
  }
  getResult(): CarManual {
    const result = this.manual!;
    this.reset();
    return result;
  }
}

class Car {
  seats: number = 0;
  engine: string = "";
  gps: string = "";
  computer: string = "";
}

class CarManual {
  priceText: string = "";
  color: string = "white";
  nameText: string = "";
}

/**
 * 主管只负责按照特定顺序执行生成步骤。其在根据特定步骤或配置来生成产品时会很有帮助
 * 由于客户端可以直接控制生成器，所以严格意义上来说，主管类并不是必需的
 * 主管可同由客户端代码传递给自身的任何生成器实例进行交互
 * 客户端可通过这种方式改变最新组装完毕的产品的最终类型
 * 主管可使用同样的生成步骤创建多个产品变体
 */
class Director {
  makeSUV() {}
  makeSportCar(builder: ManualCar) {
    builder.setColor();
    builder.setNameText();
    builder.setPriceText();
  }
  constructSportsCar(builder: Builder) {
    builder.setEngine("v12");
    builder.setGPS("v10");
    builder.setSeats(10);
    builder.setTripComputer(110);
  }
  constructSUV(builder: Builder) {}
}

function application() {
  const director = new Director();
  const carBuilder = new CarBuilder();
  director.constructSportsCar(carBuilder);
  const result = carBuilder.getResult();
  return result;
}

function getMakeSportCar() {
  const director = new Director();
  const carManual = new CarManualBuilder();
  director.makeSportCar(carManual);
  const result = carManual.getResult();
  return result;
}

export { application, getMakeSportCar };
