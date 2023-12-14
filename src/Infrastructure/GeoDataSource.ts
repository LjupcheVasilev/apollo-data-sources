import { RESTDataSource } from "@apollo/datasource-rest";
import { City } from "../Domain/types";

export class GeoDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.geodatasource.com/";
    }

    async getCity(latitude: number, longitude: number) {
        return this.get<City>(`city?key=50QWVCVPE7ID8PGZNTUPYTKBPANQ5BTH&format=json&lat=${latitude}&lng=${longitude}`);
    }
}