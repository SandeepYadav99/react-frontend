const api_endpoint = "http://localhost:5000/phonebook";
const api_headers = {
    "Content-Type": "application/json"
};

export function getPhoneBookData() {
    return fetch(api_endpoint).then(resp => resp.json());
};
export function postPhoneBookData(payload) {
    return fetch(api_endpoint, {
        method: "POST",
        headers: api_headers,
        body: JSON.stringify(payload)
    }).then(resp => resp.json());
};
export function putPhoneBookData(payload, id) {
    const api_path = `${api_endpoint}/${id}`;
    return fetch(api_path, {
        method: "PUT",
        headers: api_headers,
        body: JSON.stringify(payload)
    }).then(resp => resp.json());
};
export function deletePhoneBookData(id) {
    const api_path = `${api_endpoint}/${id}`;
    return fetch(api_path, {
        method: "DELETE",
        headers: api_headers
    }).then(resp => resp.json());
}
