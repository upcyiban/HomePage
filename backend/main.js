const BACKEND_ROOT_URL     = 'http://localhost:8080'
const BACKEND_LOGIN        = `${BACKEND_ROOT_URL}/homepage/login`
const BACKEND_LOGIN_CHECK  = `${BACKEND_ROOT_URL}/homepage/login/check`
const BACKEND_IMAGE_UPLOAD = `${BACKEND_ROOT_URL}/homepage/image`
const BACKEND_DATA_SUBMIT  = `${BACKEND_ROOT_URL}/homepage/data`
const DATA_PATH = 'data.json'
let carouselFirst = document.querySelector('#carousel-item-first')
let carouselContainer = document.querySelector('#carousel-container')
let msgBar = {
            _msgBar : document.querySelector('#msg-bar'),
            infoBg  : '#90BEF9',
            warnBg  : '#FF6868',
            succBg  : '#00FEB0',
            show(msg,bg){
                this._msgBar.innerHTML = msg
                console.log(this._msgBar.style.backgroud )
                this._msgBar.style.background = bg
                if(!this._msgBar.classList.contains('msg-bar-active')){
                    this._msgBar.classList.add('msg-bar-active')
                }
                setTimeout(()=>{
                    this._msgBar.classList.remove('msg-bar-active')
                },3000)
            },
            info(msg){
                this.show(msg,this.infoBg)
            },
            warn(msg){
                this.show(msg,this.warnBg)
            },
            success(msg){
                this.show(msg,this.succBg)
            }
        }
function judgeLogin(){
    fetch(BACKEND_LOGIN_CHECK,{
        credentials: 'include'
    }).then(res => 
        res.json()
    ).then(msg => {
        if (msg.code != 1){
            location.href = "login.html"
        }
    }).catch(err => 
        console.error(err)
    )
}
function setCarousel(carouseNode,carData){
    let image = carouseNode.children[0]
    let hrefInput = carouseNode.children[1].children[0]
    let imageInput = carouseNode.children[2]
    let srcInput = carouseNode.children[3]
    let confirmBtn = carouseNode.children[4]
    image.setAttribute('src',carData.src)
    hrefInput.value = carData.href
    confirmBtn.addEventListener('click',()=>{
        let data = new FormData()
        if(imageInput.files[0]){
            data.append('image',imageInput.files[0])
            fetch(BACKEND_IMAGE_UPLOAD,{
                method: 'POST',
                credentials: 'include',
                body: data
            }).then(res => res.json()).then(data => {
                if (data.code == 6){
                    image.setAttribute('src',data.image_url)
                }else{
                    msgBar.warn(data.message)
                }
                console.log(data)
            }).catch(err => console.error(err))
        }else{
            msgBar.warn('您还没有选择文件')
        }
        
    })
}
function appendCarousel(carData,i){
    if (i == 0){
        setCarousel(carouselFirst,carData)
        return
    }
    let carouselItem = carouselFirst.cloneNode(true)
    carouselItem.removeAttribute('id')
    console.log(carouselFirst.children)
    setCarousel(carouselItem,carData)
    carouselContainer.appendChild(carouselItem)
}

function renderDOMs(data){
    console.log(data)
    data.notices.carousels.map((carData,i) => appendCarousel(carData,i))
}
function fetchData(dataPath){
    fetch(dataPath).then(res => res.json()).then(data => renderDOMs(data)).catch(err => console.error(err))
}







function start(){
    judgeLogin()
    fetchData(DATA_PATH)
}


start()