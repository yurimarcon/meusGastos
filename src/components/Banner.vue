<template>
    <div >
        <h1>Vue.js</h1>
        <p>Ajuda você a cuidar do seu dinheio!!!</p>
    </div>  
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
div {
    background-image: linear-gradient(to right,  #3D3E47, #877B8D);
    height: 200px;
    color: #fff;
    padding: 40px 10px 10px 130px;
    font-size: 200%;
    font-family: 'Roboto Condensed', sans-serif;
}
@media screen and (max-width: 700px){
  div{
    height: 200px;
    color: #fff;
    padding: 40px 10px 10px 20px;
    font-size: 150%;
  }
}

</style>