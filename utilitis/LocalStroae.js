/* const getCartStorage = ()=>{
    const storageCard = localStorage.getItem('cart')
    if(storageCard){
        return JSON.parse(storageCard)
    }
    else{
        return []
    }
}

const saveToLS = cart =>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}
const addToLS = (id)=>{
    const cart = getCartStorage()
    cart.push(id)
    saveToLS(cart)
}
export {addToLS,getCartStorage} */
const getDataStorage = ()=>{
    const cart = localStorage.getItem('cartData')
    if(cart){
        return JSON.parse(cart)
    }
    return []
}
const setCartData = cartData =>{
    const cartStringify = JSON.stringify(cartData)
    localStorage.setItem('cartData', cartStringify)
}
const addCardData = id =>{
    const cartData = getDataStorage()
    cartData.push(id)
    setCartData(cartData)
}
const removeCart = id =>{
    const cartData = getDataStorage()
    const remove = cartData.filter(data => data !== id)
    setCartData(remove) 
}
export {addCardData,getDataStorage,removeCart}