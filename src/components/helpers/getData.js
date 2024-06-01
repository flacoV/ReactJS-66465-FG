import data from '../../database/data.json'

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data)
        }, 500)
    })
}