export default class Item {

    


    renderItem(item) {

        return `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${item.imgSrc_jpg}" alt="Card image cap">
            <div class="card-body">
                <h1>${item.name}</h1>
                <button class="btn btn-primary">Thử đồ</button>
            </div>
        </div>
              `;

    }
}
