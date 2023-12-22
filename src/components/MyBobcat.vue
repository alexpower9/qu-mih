<template>
    <div class="bobcat">
        <h1>{{ msg }}</h1>
        <p>This page is going to be the quinnipiac bobcats
            For more info on us, check out <a href="https://cli.vuejs.org" target="_blank" rel="noopener">roster</a>.
        </p>
    </div>
</template>

<script>
export default {
    name: 'MyBobcat',
    props: {
        msg: String
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00f7ce;
}
</style>