console.log('Мінімал');
console.log("Створи масив «Список покупок». Кожен елемент масиву є об`єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом: ");
const ProductList = [{
        Name: 'Potato',
        Quantity: 20,
        bought: false,
        price: 6.50,
        sum: 130,
    },
    {
        Name: 'Snikers',
        Quantity: 5,
        bought: true,
        price: 10,
        sum: 50,
    },
    {
        Name: 'Bread',
        Quantity: 1,
        bought: true,
        price: 25,
        sum: 25,
    },
    {
        Name: 'Milk',
        Quantity: 2,
        bought: false,
        price: 30,
        sum: 60,
    }
]
console.log(ProductList);

console.log("Завдання-1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали. ")
ProductList.sort(function (a, b) {
    if (a.bought > b.bought) {
        return 1;
    } else if (a.bought < b.bought) {
        return -1;
    } else {
        return 0;
    }
});
console.log(ProductList);

console.log("Завдання-2.Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.")

function readyBought(array, Name) {
    const item = array.find(item => item.Name == Name);
    item.bought = true;
    return array;
}
console.log(readyBought(ProductList, 'Bread'));

// console.log('Норма');
// console.log('Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)')

// function deleteItem() {
//     let newProductList = ProductList.pop([3]);
//     console.log(newProductList);
// }