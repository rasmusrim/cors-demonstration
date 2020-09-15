export class NoHeaders {

    static sendSimpleGetRequest(): Promise<string> {
        return new Promise(resolve => {
            fetch("http://localhost:3000/no-headers"
            )
                .then((response) => response.text())
                .then((response) => resolve(response));
        })
    }

    static sendSimpleOpaqueGetRequest(): Promise<string> {
        return new Promise(resolve => {
            const promise = fetch("http://localhost:3000/no-headers", {
                mode: "no-cors"
            });
            promise
                .then((response) => response.text())
                .then((response) => resolve(response));
        });
    }

    static sendSimpleOpaqueGetRequestWithCookies(): Promise<string> {
        return new Promise(resolve => {
            const promise = fetch("http://localhost:3000/no-headers", {
                mode: "no-cors",
                credentials: "include"
            });
            promise
                .then((response) => response.text())
                .then((response) => resolve(response));
        });
    }
}