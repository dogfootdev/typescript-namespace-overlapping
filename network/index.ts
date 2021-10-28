namespace Network {
  export namespace HTTP {
    export function get<T>(url: string): Promise<T> {
      return new Promise<T>((resolve, reject) => {});
    }
  }

  export namespace TCP {
    function listenOn(port: number) {}
  }

  export namespace UDP {
    export function send(url: string, packets: any): Promise<void> {
      return new Promise<void>((resolve, reject) => {});
    }
  }

  export namespace IP {}
}
