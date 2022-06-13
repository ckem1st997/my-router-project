import axios from 'axios';

const url = "http://apigate.somee.com/"
export default class CartService {

    getListProducts() {
        return axios.get(url + 'PublicAPI/GetProductsHome')
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }
    getCartItems(Cartid) {
        return axios.get(url + 'api/Carts/' + Cartid + '')
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }

    addCart(item) {
        // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
        return axios.post(url + 'api/Carts/addCart', item)
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }

    updateCart(id, item) {
        // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
        return axios.put(url + 'api/Carts/' + id + '', item)
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }
    deleteItemCart(id) {
        // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
        return axios.delete(url + 'api/Carts/' + id + '')
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }






}
