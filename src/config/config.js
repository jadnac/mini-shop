import axios from "axios";

const hostapi = 'http://localhost:9900'

const api = `${hostapi}`

const errorCatch = (error, string) => {
    if (error) {
      if (error.response) {
        if (error.reponse?.data) {
          return error.response?.data;
        }
        return error.response;
      }
      return error;
    } else {
      return string;
    }
  };

async function GetProducts (){
    const url = `${api}/category/all`
    return await axios.get(url).then((response) => response)
    .catch(error => errorCatch(error, 'Error Getting Categories'));
}

async function GetProductByID(id){
  const url = `${api}/product/${id}`
  return await axios.get(url).then(response => response).catch(error => errorCatch(error, 'Error Getting Product'))
}

async function BuyProductt(product, data){
  let dataa = {
    product: product,
    data: data
  }
  const url = `${api}/payment/buy`
  return await axios.post(url, dataa).then(response => response).catch(error => errorCatch(error, 'Error Buying Product'))
}

export {
    GetProducts,
    GetProductByID,
    BuyProductt
}