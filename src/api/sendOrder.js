const sendOrder = (token, arrayDetail) => {
    const data = { token, arrayDetail };
    return fetch('http://192.168.1.4/app/cart.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
};

module.exports = sendOrder;