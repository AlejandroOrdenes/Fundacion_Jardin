fetch('productos/plantas.json')
   .them((response) => response.json())
   .them((data) => console.log(data))