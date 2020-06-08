const ENDPOINT = "https://api.github.com/search/repositories?q=stars:%3E0&sort=stars&order=desc&page=1&per_page=200"
//+language:javascript

export const getRepos = async () => {
    let data = await fetch(`${ENDPOINT}`);
    data = await data.json()
    return data;
}
