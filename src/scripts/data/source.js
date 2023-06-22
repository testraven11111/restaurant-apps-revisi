import ENDPOINT from './end-point';

class sourceData {
    static async listResto() {
        const response = await fetch(ENDPOINT.LIST);
        const responseJson = await response.json();
        console.log(responseJson); // Tambahkan baris ini untuk mencetak respons API
        return responseJson;
    }

    static async detailResto(id) {
        const response = await fetch(ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        console.log(responseJson); // Tambahkan baris ini untuk mencetak respons API
        return responseJson;
    }
}

export default sourceData;
