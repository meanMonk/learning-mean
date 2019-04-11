/************************
 * Next Gen Architecture...
 *************************/

/**
 * When someone hits te url it will make request to cloud front
 * Cloud front will decide and pass the request to prod-las & pdx basis on some criteria
 * Then we are having frontend Nginx which accept the request and pass it to respective 3 nginx server instance.
 * There is one Nginx instance for the Websites (32 node/instances).
 * which will also accept the request and pass it to nginx of next-gen which decides to who to pass this further to process.
 * there we are having total 64 node or clusters which are just an docker images.
 * */

/**
*  total 30 boxes
*  8 active and 8 passive so total 16 instance per machine
*  entire load balancing done by nginx single instance (limit = 960).
*  hydra caching : use to reduce the i/o task to improve performance.
*    1.  local cache >
*           request level cache
*           process level cache
*    2.  remote cache [gemfire user caching software]> shared with different process
*          - service level cache
*          - layer / outline
*  Assets: fetch from MSS which assets server.
*
*   17200 port series to configure
*   17300
*
*
* */


/**
*   PDX : 16core machine > so having less processors
*   LAS : 8core machine > so having all processors
* */
