class MazdaCX5 {
  name: string = "a new generation cx-5";
  price: number = 12800;
  standardConfigPrice: number = 128000;
  mediumConfigPrice: number = 148000;
  bestConfigPrice: number = 148000;
  colors: string[] = ["red", "white", "blue", "black"];
  priceList: number[] = [];
  constructor() {
    this.reset();
  }
  reset() {
    this.priceList = [];
  }
  getPrice() {
    this.priceList.push(
      this.standardConfigPrice,
      this.mediumConfigPrice,
      this.bestConfigPrice
    );
    return this.priceList;
  }
  findColor(name: string) {
    if (typeof name === "string" || name !== "") {
      return this.colors.find((item) => item === name);
    } else {
      return "没有这个颜色";
    }
  }
  getCX5Name() {
    return this.name;
  }
}

class MazdaNewCX5 {
  name: string = "next generation cx-5";
  bestConfigPrice: number = 158000;
  colors: string[] = ["red", "white", "blue", "black", "yellow"];
  findColor(name: string) {
    if (typeof name === "string" || name !== "") {
      return this.colors.find((item) => item === name);
    } else {
      return "没有这个颜色";
    }
  }
}

class Adapter extends MazdaCX5 {
  private adapter: MazdaNewCX5;
  constructor(adapter: MazdaNewCX5) {
    super();
    this.adapter = adapter;
  }
  findColor(name: string): string | undefined {
    const result = this.adapter.colors;
    if (typeof name === "string" && name !== "") {
      return result.find((item) => item === name);
    } else {
      return "没有这个颜色";
    }
  }
  getPrice(): number[] {
    const bestConfigPrice = this.adapter.bestConfigPrice;
    const mazdaPriceList = [
      this.standardConfigPrice,
      this.mediumConfigPrice,
      bestConfigPrice,
    ];
    return mazdaPriceList;
  }
  getCX5Name(): string {
    return this.adapter.name;
  }
}

function getMazdaCX5Name(target: MazdaCX5) {
  const result = target.getCX5Name();
  return result;
}

export { getMazdaCX5Name, MazdaCX5, MazdaNewCX5, Adapter };
