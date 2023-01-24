import axios from 'axios';

// set up defaults
axios.defaults.baseUrl = 'http://localhost:3000'
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class HttpService {
    constructor() {
        this.handleError.bind(this);
    }

    private handleError(err: Error) {
        console.error(err);
    }

    public get(url: string): Promise<any> {
        let baseUrl = 'http://localhost:3000'
        return axios.get(baseUrl + url).then(({ data }: any) => {
            console.log(data);
            return data;
        }).catch(this.handleError)
    }

    public post(url: string, dataToPost: any | null): Promise<any> {
        return axios.post(url, dataToPost).catch(this.handleError)
    }

    public delete(url: string): Promise<any> {
        return axios.delete(url).catch(this.handleError)
    }
}

export default HttpService;