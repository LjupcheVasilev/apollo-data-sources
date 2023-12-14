import { CacheOptions, RESTDataSource, RequestOptions } from "@apollo/datasource-rest";
import { Launch, Launchpad, Rocket } from "../Domain/types";

export class SpaceXDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.spacexdata.com/v4/";
    }

    async getLaunch(id: string) {
        return this.get<Launch>(`launches/${id}`);
    }
    
    async getRocket(id: string) {
        return this.get<Rocket>(`rockets/${id}`);
    }
    
    async getLaunchpad(id: string) {
        return this.get<Launchpad>(`launchpads/${id}`);
    }
}