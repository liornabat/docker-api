import Modem = require('docker-modem');
/**
 * Class representing a service
 */
export declare class Service {
    modem: Modem;
    id: String;
    data: Object;
    /**
     * Create a service
     * @param  {Modem}      modem     Modem to connect to the remote service
     * @param  {string}     id        Id of the service (optional)
     */
    constructor(modem: Modem, id: String);
    /**
     * Update a service
     * https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/update-a-service
     * @param  {Object}   opts  Query params in the request (optional)
     * @return {Promise}        Promise return the new service
     */
    update(opts?: Object): Promise<Service>;
    /**
     * Get low-level information on a service
     * https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-one-or-more-services
     * The reason why this module isn't called inspect is because that interferes with the inspect utility of service.
     * @param  {Object}   opts  Query params in the request (optional)
     * @return {Promise}        Promise return the service
     */
    status(opts?: Object): Promise<Service>;
    /**
     * Remove a service
     * https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/remove-a-service
     * @param  {Object}   opts  Query params in the request (optional)
     * @return {Promise}        Promise return the result
     */
    remove(opts?: Object): Promise<String>;
}
export default class  {
    modem: Modem;
    /**
     * Create a service
     * @param  {Modem}      modem     Modem to connect to the remote service
     */
    constructor(modem: Modem);
    /**
     * Get a Service object
     * @param  {id}         string    ID of the secret
     * @return {Network}
     */
    get(id: String): Service;
    /**
     * Create a service
     * https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/create-a-service
     * @param  {Object}   opts  Query params in the request (optional)
     * @return {Promise}        Promise return the new service
     */
    create(opts?: Object): Promise<Service>;
    /**
     * Get the list of services
     * https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-services
     * @param  {Object}   opts  Query params in the request (optional)
     * @return {Promise}        Promise returning the result as a list of services
     */
    list(opts?: Object): Promise<Array<Service>>;
}
