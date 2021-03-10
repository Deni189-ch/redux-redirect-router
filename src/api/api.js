import * as axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://www.filltext.com/",
});

export const datasAPI = {
  getDatas() {
    const Url = `?rows=30&id={number|30}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return instance.get(Url).then((response) => response);
  },
};

// export const usersAPI = {
//     getUsers(currentPage = 1, pageSize = 10) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data;
//             });
//     }
// }
