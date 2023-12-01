export function formatPrice(price){
    price = price + '';
    if (price.length > 3){
        const offset = price.length - 3;
        return price.substring(0, offset) + " " + price.substring(offset, price.length)
    }
    return price;
}