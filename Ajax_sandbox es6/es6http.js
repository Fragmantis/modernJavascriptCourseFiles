// class EasyHTTP {
//     //make http get request
//     get(url) {
//         return new Promise((resolve, reject) => {
//             fetch(url)
//             .then(res => res.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err)) 
//         });
//     }


// //make an HTTP POST request
// post(url, data) {
//     return new Promise((resolve, reject) => {
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     });
// }


// //make an HTTP PUT request
// put(url, data) {
//     return new Promise((resolve, reject) => {
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     });
// }

// //make an HTTP DELETE request 
// delete(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url, {
//             method: 'DELETE',
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(() => resolve('Resource Deleted'))
//         .catch(err => reject(err));
//     });
// }

// }



//es6 async await
class EasyHTTP {
    //make http get request
   async get(url) {
       const response = await fetch(url);
       const resData = await response.json();
       return resData;
    }


//make an HTTP POST request
async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        });
        const resData = await response.json();
       return resData;
}


//make an HTTP PUT request
async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
}

//make an HTTP DELETE request 
async delete(url) {
  const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    const resData = await 'Resource Deleted';
        return resData;
}

}

