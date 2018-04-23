/* eslint-disable no-undef */
function getPricingDetail(id, callback) {
    return fetch(`pricings/current?product_id=${id}&get_product_detail=true`, {
        accept: 'application/json',
        method: 'GET'
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(callback);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

function parseJSON(response) {
    return response.json();
}

const ServerClient = {getPricingDetail};
export default ServerClient;