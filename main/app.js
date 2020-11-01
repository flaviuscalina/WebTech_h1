function removeOrderItem(orderInfo, position){
    //1
    if((orderInfo["items"] instanceof Array)==false){
        throw "Items should be an array";
    }
  //3
   if(position > orderInfo.items.length){
        throw "Invalid position"
    }
  //2
     for(let i = 0; i < orderInfo.items.length; i++){
        if(!(orderInfo.items[i].hasOwnProperty("price") && 
        orderInfo.items[i].hasOwnProperty("quantity"))){
            throw "Malformed item";
        }
    }

  //5
    orderInfo.total = orderInfo.total - orderInfo.items[position].price * orderInfo.items[position].quantity;
  
  //4
    orderInfo.items.splice(position, 1);
    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;
