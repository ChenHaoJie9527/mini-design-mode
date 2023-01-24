/**
 * Target定义客户端代码使用特定的接口
 */
class Target {
  request(): string {
    return "Target: The default target's behavior";
  }
}

/**
 * Adaptee包含一些有用的行为，但是它的接口是不兼容的,使用现有的客户端代码。被改编者在开始之前需要一些适应客户端代码可以使用它
 */
class Adaptee {
  specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

class Adapter extends Target {
  private adapter: Adaptee;
  constructor(adapter: Adaptee) {
    super();
    this.adapter = adapter;
  }
  request(): string {
    const result = this.adapter
      .specificRequest()
      .split(".")
      .reverse()
      .join(",");
    return `Adapter：${result}`;
  }
}

function clientCode(target: Target) {
  const result = target.request();
  console.log(result);
}



export { clientCode };
