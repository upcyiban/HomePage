function judgeProd(){
    if (process.env.NODE_ENV == 'production') return true
    else return false
}

let DATA_PATH_CONF={
        dev:'http://localhost:8086/backend/data_copy.json',
        prod:'/yb-data/data.json'
    }
let DATA_PATH = judgeProd() ? DATA_PATH_CONF.prod : DATA_PATH_CONF.dev
export { DATA_PATH }

