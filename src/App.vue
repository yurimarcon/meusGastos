<template>
  <div >
    <Header />
    <Banner />
    <div id="paineis">
      <PainelResumo />
      <PainelLancamento />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
import Banner from "./components/Banner"
import PainelLancamento from "./components/PainelLancamento"
import PainelResumo from "./components/PainelResumo"

export default {
  name: 'App',
  components: {
    Header, Banner, PainelLancamento, PainelResumo
  }
}
</script>

<style>
body{
  max-width: 100%;
  height: 100%;
  margin: 0;
  background-color: #202225;
}
#paineis{
  /* float: right; */
  /* justify-content: right; */
  flex-direction: row-reverse;
  display: flex;
  padding: 2%;
  justify-content: space-evenly;
}
.vermelho{
    color: crimson;
}
.verde{
    color: rgb(50, 151, 50);
}

@media screen and (max-width: 700px){
  div{
    max-width: 100%;
  }
  #paineis{
    display: block;
    padding: 2%;
  }
}
</style>
