const BACKEND_ROOT_URL     = 'http://localhost:8080'
const BACKEND_LOGIN        = `${BACKEND_ROOT_URL}/homepage/login`
const BACKEND_LOGIN_CHECK  = `${BACKEND_ROOT_URL}/homepage/login/check`
const BACKEND_IMAGE_UPLOAD = `${BACKEND_ROOT_URL}/homepage/image`
const BACKEND_DATA_SUBMIT  = `${BACKEND_ROOT_URL}/homepage/data`
const DATA_PATH = 'data_copy.json'
const TABS_NAME = ['易社区','易学习','易生活','易工具','易帮助']
const DEFAULT_ICON = 'assets/icon.svg'
let carouselFirst = document.querySelector('#carousel-item-first')
let carouselContainer = document.querySelector('#carousel-container')
let notice1First = document.querySelector('#notice1-first')
let notice1Container = document.querySelector('#notices1-container')
let notice2Container = document.querySelector('#notices2-container')
let appsContainer = document.querySelector('#apps-container')
let saveBtn = document.querySelector('#save-btn')
let loginPage = document.querySelector('#login-page')
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
        if (msg.code == 1){
            loginPage.style.display = 'none'
        }else{
            loginPage.style.display = 'flex'
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
        uploadImage(imageInput,image)
    })
}
function uploadImage(imageInput,image){
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
function setNotice(noticeNode,notiData){
    let contentText = noticeNode.children[1]
    let contentHref = noticeNode.children[3]
    contentText.value = notiData.text
    contentHref.value = notiData.href
}
function appendNotice (notiData, i, noticeXFirst, noticeXContainer,x){
    if (i == 0 && x == 1){
        console.log(noticeXFirst.children)
        setNotice(noticeXFirst,notiData)
        return 
    }
    
    let newNoticeNode = noticeXFirst.cloneNode(true)
    if (x == 2){
        newNoticeNode.className = 'notice2-container notice-container'
    }
    newNoticeNode.removeAttribute('id')
    setNotice(newNoticeNode, notiData)
    noticeXContainer.appendChild(newNoticeNode)
}
function createApp(appData){
    let appItemContainer = document.createElement('div')
    appItemContainer.classList.add('app-item-container')
    let icon = document.createElement('img')
    icon.classList.add('app-icon')
    icon.setAttribute('src',appData.icon)
    let name = document.createElement('input')
    name.classList.add('app-name')
    name.setAttribute('type','text')
    name.setAttribute('placeholder','名称')
    name.value = appData.name
    let iconUpload = document.createElement('input')
    iconUpload.classList.add('app-icon-upload')
    iconUpload.setAttribute('type','file')
    let href = document.createElement('input')
    href.classList.add('app-href')
    href.setAttribute('type','text')
    href.setAttribute('placeholder','链接')
    href.value = appData.href
    let confirmBtn = document.createElement('div')
    confirmBtn.classList.add('confirm-btn-small')
    confirmBtn.innerText = '确定'
    let deleteBtn = document.createElement('div')
    deleteBtn.classList.add('delete-btn-small')
    deleteBtn.innerText = '删除'
    confirmBtn.addEventListener('click',()=>{
        uploadImage(iconUpload,icon)
    })
    deleteBtn.addEventListener('click',()=>{
        if(confirm(`你确定要删除${appData.name}这个元素么`)){
            appItemContainer.remove()
        }
    })
    appItemContainer.appendChild(icon)
    appItemContainer.appendChild(name)
    appItemContainer.appendChild(iconUpload)
    appItemContainer.appendChild(href)
    appItemContainer.appendChild(confirmBtn)
    appItemContainer.appendChild(deleteBtn)
    return appItemContainer
}
function createAddApp(containerNode){
    let addAppContainer = document.createElement('div')
    addAppContainer.classList.add('app-item-container')
    addAppContainer.classList.add('add-app-container')
    containerNode.appendChild(addAppContainer)
    addAppContainer.addEventListener('click',()=>{
        let appData = {icon:DEFAULT_ICON,name:"",href:""}
        containerNode.insertBefore(createApp(appData),addAppContainer)
    })
}
function appendTabs(tabData,tabName){
    let dataTitle = document.createElement('div')
    dataTitle.classList.add('data-title')
    dataTitle.innerText = tabName
    let appContainer = document.createElement('div')
    appContainer.classList.add('app-container')
    tabData.map(ad => appContainer.appendChild(createApp(ad)))
    createAddApp(appContainer)
    appsContainer.appendChild(dataTitle)
    appsContainer.appendChild(appContainer)
}
function renderDOMs(data){
    console.log(data)
    data.notices.carousels.map((carData,i) => appendCarousel(carData,i))
    data.notices.notice_1.content.map((notiData,i)=>appendNotice(notiData,i,notice1First,notice1Container,1))
    data.notices.notice_2.content.map((notiData,i)=>appendNotice(notiData,i,notice1First,notice2Container,2))
    data.apps.map((tabData,i)=>appendTabs(tabData,TABS_NAME[i]))
}
function fetchData(dataPath){
    fetch(dataPath).then(res => res.json()).then(data => renderDOMs(data)).catch(err => console.error(err))
}
function scanDOMs(){
    let data = {
        notices:{
            carousels:[],
            notice_1:{
                title:'通知公告',
                content:[]
            },
            notice_2:{
                title:'校园活动',
                content:[]
            }
        },
        apps:[]
    }
    let carChildren =  carouselContainer.children
    console.log(carChildren)
    for (let i = 0; i < carChildren.length; i++){
        let src = carChildren[i].children[0].getAttribute('src')
        let href = carChildren[i].children[1].children[0].value
        data.notices.carousels.push({src:src,href:href})
    }
    let notices1 = document.querySelectorAll('.notice1-container')
    console.log(notices1)
    for (let i = 0; i < notices1.length; i++){
        let text = notices1[i].children[1].value
        let href = notices1[i].children[3].value
        data.notices.notice_1.content.push({text:text,href:href})
    }
    let notices2 = document.querySelectorAll('.notice2-container')
    console.log(notices2)
    for (let i = 0; i < notices2.length; i++){
        let text = notices2[i].children[1].value
        let href = notices2[i].children[3].value
        data.notices.notice_2.content.push({text:text,href:href})
    }
    let apps = document.querySelectorAll('.app-item-container')
    console.log(apps)
    let tmp = []
    for (let i = 0; i < apps.length; i++){
        if(apps[i].classList.contains('add-app-container')){
            console.log(tmp)
            data.apps.push(tmp)
            tmp = []
            continue
        }
        let icon = apps[i].children[0].getAttribute('src')
        let name = apps[i].children[1].value
        let href = apps[i].children[3].value
        tmp.push({icon:icon,name:name,href:href})
    }
    return data
}
function handleSave(){
    saveBtn.addEventListener('click',()=>{
        let data = scanDOMs()
        fetch(BACKEND_DATA_SUBMIT,{
            method: 'POST',
            credentials: 'include',
            body:JSON.stringify(data)
        }).then(res => res.json()).then(msg => {
            if (msg.code == 5){
                msgBar.success(msg.message)
            }else{
                msgBar.warn(msg.message)
            }
        })
    })
}
function loginSubmit(){
            let usname = document.querySelector('input[name=username]')
                let pwd =  document.querySelector('input[name=password]')
                let data = {
                    username : usname.value,
                    password      : pwd.value
                }
            // console.log(data)
                msgBar.info('正在登录')
                fetch(BACKEND_LOGIN,{
                    method:'POST',
                    credentials: 'include',
                    body: JSON.stringify(data)
                }).then(res => 
                    res.json()
                ).then(msg => {
                    if (msg.code == 1){
                        msgBar.success('登陆成功')
                        judgeLogin()
                    }else{
                        msgBar.warn(msg.message)
                        usname.value = ""
                        pwd.value = ""
                    }
                }).catch(err => {
                    console.error(err)
                })
        }

function handleSubmit(){
    let subBtn = document.querySelector('#submit-btn')
    subBtn.addEventListener('click',loginSubmit)
    document.onkeypress = (e)=>{
        if (e.keyCode == 13){
            loginSubmit()
        }
    }
}
(function (){
    judgeLogin()
    fetchData(DATA_PATH)
    handleSave()
    handleSubmit()
})()