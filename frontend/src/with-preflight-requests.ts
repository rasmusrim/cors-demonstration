export class WithPreflight {

    static sendPostRequestWithFunnyHeader(): Promise<string> {
        return new Promise(resolve => {
            fetch("http://localhost:3000/with-preflight", {
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

    static sendDeleteRequest(): Promise<string> {
        return new Promise(resolve => {
            fetch("http://localhost:3000/with-preflight", {
                    method: 'DELETE',
                }
            )
                .then((response) => response.text())
                .then((response) => resolve(response));
        })
    }


}