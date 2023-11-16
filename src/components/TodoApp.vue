<script>
export default {
  name:'HelloWorld',
  props:{
    msg:String
  }
}
</script>

<template>
  <div class="container">
  <h2 class="text-center mt-5">My Vue Todo App</h2> 
    <div class="d-flex">
      <input type="text" placeholder="Enter task" class="w-100 from-control"/>
      <button class="btn btn-warning rounded-0" @click="submitTask">
      SUBMIT
      </button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
