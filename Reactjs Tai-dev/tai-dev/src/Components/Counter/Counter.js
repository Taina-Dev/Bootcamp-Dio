function Counter(){
    let quantity = 0;

    function upQuantity(){
        quantity = quantity +1;
        document.getElementById('conter-box').innerHTML = quantity;
        console.log(quantity);
    }

    return(
        <>
          <h1 id="conter-box">{quantity}</h1>
          <button onClick={upQuantity}>Aumentar</button>
        </>
    )
                
};

export  default Counter;