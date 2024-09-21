fetch(https://api.example.com/data)
  .then(response => {
    if (!response.ok) {
        throw new Error(Network response was not ok);
    }
    return response.json(); // 解析 JSON 数据
  })
  .then(data => {
    console.log(data); // 处理数据
  })
  .catch(error => {
    console.error(There was a problem with your fetch operation:, error);
  });
