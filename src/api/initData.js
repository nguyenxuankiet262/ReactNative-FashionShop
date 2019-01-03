const initData = () => (
    fetch('http://192.168.1.4/app')
        .then((response) => response.json())
);

export default initData;