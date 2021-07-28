import DataFetch from "../utils/fetchData.js";
import Menu from "../models/menu.js";



import Ao from "../models/Ao.js";
import Quan from "../models/Quan.js";
import GiayDep from "../models/giayDep.js";
import TuiXach from "../models/TuiXach.js";
import DayChuyen from "../models/DayChuyen.js";
import KieuToc from "../models/KieuToc.js";
import Nen from "../models/Nen.js";


const dataFetch = new DataFetch();
const menu = new Menu();

let clothesArr = [];

const getEle = (id) => {
    return document.getElementById(id);
}


dataFetch.fetchNavPills().then(res => {
    getEle('nav-pills').innerHTML = menu.renderMenu(res.data);
    getEle('tab-panes').innerHTML = menu.renderTabPane(res.data);
}).catch(err => {
    console.log(err);
})

function renderClothes(clothes) {
    let content = '';

    content = `
            <div class="card nav__gridItem" style="width: 80%; height: 50%;">
                <img class="card-img-top" src="${clothes.imgSrc_jpg}" alt="Card image cap">
                <div class="card-body text-center">
                    <p class="card-text">${clothes._name}</p>
                    <button class="btn btn-primary" onclick="thuDo('${clothes.id}')">Thử đồ</button>
                </div>
            </div>
          `;

    return content;
}

dataFetch.fetchTabPanes().then(res => {

    res.data.forEach(item => {

        const { id, type, name, desc, imgSrc_jpg, imgSrc_png } = item;

        switch (type) {
            case "topclothes":
                const ao = new Ao(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                console.log(ao)
                clothesArr = [...clothesArr, ao];
                getEle(`pills-${type}`).innerHTML += renderClothes(ao);

                break;
            case "botclothes":
                const quan = new Quan(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(quan);
                clothesArr = [...clothesArr, quan];
                break;
            case "shoes":
                const giayDep = new GiayDep(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(giayDep);
                clothesArr = [...clothesArr, giayDep];
                break;
            case "handbags":
                const tuiXach = new TuiXach(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                clothesArr = [...clothesArr, tuiXach];
                getEle(`pills-${type}`).innerHTML += renderClothes(tuiXach);
                break;
            case "necklaces":
                const dayChuyen = new DayChuyen(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                clothesArr = [...clothesArr, dayChuyen];
                getEle(`pills-${type}`).innerHTML += renderClothes(dayChuyen);
                break;
            case "hairstyle":
                const kieuToc = new KieuToc(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                clothesArr = [...clothesArr, kieuToc];
                getEle(`pills-${type}`).innerHTML += renderClothes(kieuToc);
                break;
            case "background":
                const nen = new Nen(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                clothesArr = [...clothesArr, nen];
                getEle(`pills-${type}`).innerHTML += renderClothes(nen);
                break;
        }


    })
    getEle("pills-tabTopClothes").classList.add("active");
    getEle("pills-topclothes").classList.add("active", "show");

}).catch(err => {
    console.log(err);
})




const thuDo = function (id) {
    dataFetch.xemThuDo(id).then(res => {
        const { type, imgSrc_png } = res.data;
        switch (type) {
            case "topclothes":
                getEle("bikinitop").innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
            case "botclothes":
                getEle("bikinibottom").innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
            case "shoes":
                getEle("shoes").innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
            case "handbags":
                getEle("handbag").innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
            case "necklaces":
                getEle("necklace").innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
            case "hairstyle":
                getEle("hairstyle").innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
            case "background":
                getEle("background").innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
        }
    })

};
window.thuDo = thuDo;






