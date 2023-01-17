/**
 * Singleton类定义了允许客户端访问的“getInstance”方法
 * 唯一的单例实例
 */
export default class Singleton {
  name: string = "";
  age: number = 10;
  list: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // 私有的静态类属性，用于存放初始化实例类
  private static instance: Singleton;
  // 单例的构造函数应该总是私有的，以防止直接调用 new 操作符
  private constructor() {}
  /**
   * 这是控制对单例实例的访问的静态方法
   * 这个实现让你子类化单例类，同时保持只有一个实例
   * @returns Singleton
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  /**
   * 最后，任何单例都应该定义一些业务逻辑
   * 在实例上执行
   */
  someBusinessLogic() {}

  getList() {
    return this.list;
  }
  getName() {
    return this.name;
  }
  setName(val: string) {
    this.name = val;
  }
}
