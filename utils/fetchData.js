class DataFetch {
    fetchNavPills() {
        return axios({
            url: 'http://localhost:3000/navPills',
            method: 'GET',
        });
    }
    fetchTabPanes() {
        return axios({
            url: 'http://localhost:3000/tabPanes',
            method: 'GET',
        });
    }
    xemThuDo = function (id) {
        
        return axios({
            url: `http://localhost:3000/tabPanes/${id}`,
            method: 'GET',
        })
    }
}

export default DataFetch;