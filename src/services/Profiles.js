const ENDPOINT = "https://api.github.com/search/users?q=repos:%3E0&sort=followers&order=desc&page=1&per_page=50&since=daily"

export const getProfiles = async () => {
    let data = await fetch(`${ENDPOINT}`);
    data = await data.json()
    return data;
}
