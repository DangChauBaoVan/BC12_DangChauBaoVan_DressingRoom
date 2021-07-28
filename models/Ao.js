import Clothes from "./Clothes.js";

class Ao extends Clothes {
    constructor(id,type,_name,desc,imgSrc_jpg,imgSrc_png){
        super(id,type,_name,desc,imgSrc_jpg,imgSrc_png);
    }
    
    thuAo(){
        const selectedAo = document.querySelector("body");
        selectedAo.innerHTML = `${this.imgSrc_png}`;
    }
}
export default Ao;