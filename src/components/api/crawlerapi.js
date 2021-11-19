import axios from 'axios';

const api = {
    getGames: async function games(callback) {
        // const apiUrl = 'http://localhost:3000/games'
        // fetch(apiUrl)
        //   .then((response) => response.json())
        //   .then((data) => console.log('This is your data', data))

        await axios.get(process.env.URL_API_CONTENT + `/games`, {
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res.data.results);
            callback(res.data.results)
        })
    },
    getNews: async function news(callback) {
        // const apiUrl = 'http://localhost:3000/games'
        // fetch(apiUrl)
        //   .then((response) => response.json())
        //   .then((data) => console.log('This is your data', data))

        await axios.get(process.env.URL_API_CONTENT + `/news`, {
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res.data.results);
            callback(res.data.results)
        })
    },
    getTecnology: async function tecnology(callback) {
        // const apiUrl = 'http://localhost:3000/games'
        // fetch(apiUrl)
        //   .then((response) => response.json())
        //   .then((data) => console.log('This is your data', data))

        await axios.get(process.env.URL_API_CONTENT + `/tecnology`, {
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res.data.results);
            callback(res.data.results)
        })
    },
    getEntertainment: async function entertainment(callback) {
        // const apiUrl = 'http://localhost:3000/games'
        // fetch(apiUrl)
        //   .then((response) => response.json())
        //   .then((data) => console.log('This is your data', data))

        await axios.get(process.env.URL_API_CONTENT + `/entertainment`, {
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res.data.results);
            callback(res.data.results)
        })
    },
    getType: async function(type, nextPage, callback) {
        // const apiUrl = 'http://localhost:3000/games'
        // fetch(apiUrl)
        //   .then((response) => response.json())
        //   .then((data) => console.log('This is your data', data))
        var url = process.env.URL_API_CONTENT + `/` + type;
        url += nextPage != undefined ? '?nextPage=' + nextPage : '' ;

        await axios.get(url, {
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res.data.results);
            callback(res.data.results)
        })
    },
    getPageDetail: async function(id, page, callback) {
        await axios.get(process.env.URL_API_CONTENT + `/pagedetail?id=`+ id + `&page=` + page, {
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res.data.results);
            callback(res.data.results)
        })
    }
}

export default api;