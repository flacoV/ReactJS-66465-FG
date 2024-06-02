import data from '../../database/products.json'

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data.products)
        }, 2000)
    })
}