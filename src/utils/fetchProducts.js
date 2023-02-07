const data = {
    "products": [
      {
        "id": 1,
        "name": "Холодильник",
        "category": "Техника",
        "description": "Холодильник - описание",
        "img": "https://avatars.mds.yandex.net/get-mpic/4413406/img_id6002073624450951784.jpeg/orig",
        "price": 375
      },
      {
        "id": 2,
        "name": "Телевизор",
        "category": "Техника",
        "description": "Телевизор - описание",
        "img": "https://img.5element.by/import/images/ut/goods/good_95be4caf-ba5b-11ec-bb95-0050560120e8/43le7052d-televizor-horizont-2_600.jpg",
        "price": 520
      },
      {
        "id": 3,
        "name": "Микроволновая печь",
        "category": "Техника",
        "description": "Микроволновая печь - описание",
        "img": "https://img.5element.by/import/images/ut/goods/good_c4058107-2539-11e5-813c-00505684b891/good_img_25a2fe8c-8748-11e7-80eb-005056842056_600.jpg",
        "price": 130
      },
      {
        "id": 4,
        "name": "Велосипед",
        "category": "Спорт",
        "description": "Велосипед - описание",
        "img": "https://thumb.tildacdn.com/tild3663-3665-4565-a633-666437346366/-/resize/480x/-/format/webp/123_1.jpg",
        "price": 850
      },
      {
        "id": 5,
        "name": "Шахматы",
        "category": "Спорт",
        "description": "Шахматы - описание",
        "img": "https://s4-goods.ozstatic.by/1000/207/896/10/10896207_0.jpg",
        "price": 50
      },
      {
        "id": 6,
        "name": "Душевая кабина",
        "category": "Сантехника",
        "description": "Душевая кабина - описание",
        "img": "https://www.bydom.by/media/products/river/dushevaya-kabina-river-nara-light-90/img_Wteile.jpg",
        "price": 560
      }
    ]
};

export const fetchProducts = (time = 1000) => 
    new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, time);
    }
);
