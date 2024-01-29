
const DOMAIN = 'http://localhost:4000';

export const request = async (method, url, data) => {
    return await axios ({
        method,
        url: `${DOMAIN}${url}`,
        data
    }).then(res => res.data)
    .catch(error => console.log(error));
}