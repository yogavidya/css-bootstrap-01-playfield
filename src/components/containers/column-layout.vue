<template>
  <b-container id="main-container">
        <h3>La proprietà COLS di b-col è lo span su uno spazio implicito di 12 colonne.</h3>
        <h4><p>Se la somma dei valori di COLS per la riga non è 12,</p>
        <p>viene ignorata e le colonne hanno spaziatura uguale.</p></h4>
        <b-row class="header-row">7 unsized columns</b-row>
        <b-row>
            <b-col class="col">1</b-col>
            <b-col class="col">2</b-col>
            <b-col class="col">3</b-col>
            <b-col class="col">4</b-col>
            <b-col class="col">5</b-col>
            <b-col class="col">6</b-col>
            <b-col class="col">7</b-col>
        </b-row>
        <b-row class="spacer-row"/>
        <b-row class="header-row">columns: 4-3-5 (implicit total: 12)</b-row>
        <b-row>
            <b-col class="col" cols=4>1</b-col>
            <b-col class="col" cols=3>2</b-col>
            <b-col class="col" cols=5>3</b-col>
        </b-row>
        <b-row class="spacer-row"/>
        <b-row class="header-row">columns: 2-4-6</b-row>
        <b-row cols=12>
            <b-col class="col" cols=2>1</b-col>
            <b-col class="col" cols=4>2</b-col>
            <b-col class="col" cols=6>3</b-col>
        </b-row>
        <b-row class="spacer-row"/>
        <b-row class="header-row">3 columns: COLS = [25,50,25] (ignored)</b-row>
        <b-row cols=100>
            <b-col class="col" cols=25>1</b-col>
            <b-col class="col" cols=50>2</b-col>
            <b-col class="col" cols=25>3</b-col>
        </b-row>
        <b-row class="spacer-row"/>
    </b-container>
</template>

<script>
export default {
  name: 'ColumnLayout',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main-container {
    background-color: yellow;
    border: 1px solid black;
}
.col {
    border: 1px solid blue !important;
}

.spacer-row {
    height: .5em;
    background-color: lightgray;
}

.header-row {
    background-color: yellowgreen;
}
</style>
