export class WithHeaders {

    static sendGetRequest(): Promise<string> {
        return new Promise(resolve => {
            fetch("http://localhost:3000/with-headers"
            )
                .then((response) => response.text())
                .then((response) => resolve(response));
        })
    }

    static sendPostRequest(): Promise<string> {
        return new Promise(resolve => {
            fetch("http://localhost:3000/with-headers", {
                    method: 'POST'
                }
            )
                .then((response) => response.text())
                .then((response) => resolve(response));
        })
    }

    static sendPostRequestWithFunnyHeader(): Promise<string> {
        return new Promise(resolve => {
            fetch("http://localhost:3000/with-headers", {
                    method: 'POST',
                headers: {
                    'funny-header': 'I am funny'
                }
                }
            )
                .then((response) => response.text())
                .then((response) => resolve(response));
        })
    }

    static sendDeleteRequestWithCookies(): Promise<string> {
        return new Promise(resolve => {
            fetch("http://localhost:3000/with-headers", {
                    method: 'DELETE',
                }
            )
                .then((response) => response.text())
                .then((response) => resolve(response));
        })
    }


}