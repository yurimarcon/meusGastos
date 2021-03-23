<template>
  <div>
    <Header />
    <Banner />
    <div id="paineis">
      <PainelLancamento />
      <PainelResumo />
    </div>
    <div id="itens">
      <ItemLancado />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
import Banner from "./components/Banner"
import PainelLancamento from "./components/PainelLancamento"
import PainelResumo from "./components/PainelResumo"
import ItemLancado from "./components/ItemLancado"

export default {
  name: 'App',
  components: {
    Header, Banner, PainelLancamento, PainelResumo, ItemLancado
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
  display: flex;
  padding: 2%;
  justify-content: space-evenly;
}
#itens{
  display: flex;
  margin-left: 5.5%;
}
</style>
