class ApiRequest {
  request() {
    return "http";
  }
}

class RestfulRequest {
  getRequest() {
    return "restful";
  }
}

class Adapter extends ApiRequest {
  private restful: RestfulRequest;
  constructor(restful: RestfulRequest) {
    super();
    this.restful = restful;
  }
  request(): string {
    const result = this.restful.getRequest();
    return result;
  }
}

function clientCode(target: ApiRequest) {
  const result = target.request();
  return result;
}

export { clientCode, Adapter, RestfulRequest };
