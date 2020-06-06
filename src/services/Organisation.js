const ENDPOINT = "https://api.github.com/search/users?q=type:org&sort=repositories&order=desc&page=1&per_page=50&since=daily"

export const getOrgs = async () => {
    let data = await fetch(`${ENDPOINT}`);
    data = await data.json()
    return data;
}
