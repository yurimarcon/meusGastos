<template>
    <div>
    
        <img src="../img/logo.svg" alt="logo" />
        <span><b>Meus Gastos App</b></span>
        
    </div> 
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
div { 
    display: flex;   
    padding: 1% 0 0 130px;
}

img {
    width: 60px;
}
span{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 2%;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    color: #fff;
}
</style>