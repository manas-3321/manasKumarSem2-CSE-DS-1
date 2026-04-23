fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    const output = document.getElementById("output");

    data.forEach(product => {
      const li = document.createElement("li");
      li.innerText = product.title;
      output.appendChild(li);
    });
  })
  .catch(err => console.log(err));