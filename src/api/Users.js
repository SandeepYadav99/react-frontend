const api_endpoint = "http://localhost:5000/user";
const api_headers = {
    "Content-Type": "application/json"
};

export function getUsers(token) {
    // var headers = {
    //     Authorization: token
    // }
    var api_path = api_endpoint + "/getUsers";
    return fetch(api_path, {
        method: "GET",
        // headers: headers
    }).then(resp => resp.json());
};
export function signUp(payload) {
    var api_path = api_endpoint + "/signup";
    return fetch(api_path, {
        method: "POST",
        headers: api_headers,
        body: JSON.stringify(payload)
    }).then(resp => resp.json());
};
export function login(payload) {
    var api_path = api_endpoint + "/login";
    return fetch(api_path, {
        method: "POST",
        headers: api_headers,
        body: JSON.stringify(payload)
    }).then(resp => resp.json());
};
