import { SQLDataSource } from "datasource-sql";
import knex from 'knex';
import { Launch, Launchpad, Rocket } from "../Domain/types";

const knexConfig = {
    client: "pg",
    connection: {
        username: 'dev',
        password: '',
        database: 'spacex',
        host: 'localhost',
        port: 5432,
    }
};

const knexInstance = knex(knexConfig);

export class SpaceXDatabase extends SQLDataSource {
    constructor() {
        super(knexInstance);
    }

    async getLaunch(id: string) {
        const launch = await this.knex.select<Launch>('*').from('launches').where({ id }).first();
        if (!launch) {
            throw new Error(`Launch with id ${id} not found`);
        }
        return launch;
    }

    async getRocket(id: string): Promise<Rocket> {
        return await this.knex.select<Rocket>('*').from('rockets').where({ id }).first();
    }

    async getLaunchpad(id: string) {
        return await this.knex.select<Launchpad>('*').from('launchpads').where({ id }).first();
    }
}