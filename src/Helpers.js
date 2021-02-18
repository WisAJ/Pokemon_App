import { food } from './Foods';

// to store the index outcome. i.e. will be used as item later 



const choice = (food) => {

    if (food.length < 1) { food = food.slice(0); }
    var index = Math.floor(Math.random() * food.length);
    var item = food[index];
    return item;
}

const remove = (items, item) => {
    for (var i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return items.splice(i, 1);
        }
    }
}

const fruit = choice(food)


export {remove, fruit}; 