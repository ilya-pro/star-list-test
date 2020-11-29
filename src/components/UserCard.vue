<template>
  <div class="pr-UserCard">
    <h4>{{ name }}</h4>
    <div class="pr-UserCard__detail">
      <div class="pr-UserCard__col">
        <dl>
          <dt>Gender</dt>
          <dd>{{ gender }}</dd>
        </dl>
        <dl>
          <dt>Height</dt>
          <dd>{{ height }}</dd>
        </dl>
        <dl>
          <dt>Mass</dt>
          <dd>{{ mass }}</dd>
        </dl>
      </div>
      <div class="pr-UserCard__col">
        <div class="pr-UserCard__subTitle">Starships:</div>
        <span class="badge badge-danger" v-for="item in starships" :key="item">{{ item }}</span>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    name: String,
    gender: String,
    height: Number,
    mass: Number,
    starships: Array
  }
}
</script>

<style>
.pr-UserCard {
  background-color: #D1ECF1;
  border-radius: 4px;
  padding: 12px 20px .1rem 20px;
  color: #0c5460;
}
.pr-UserCard h4 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: .5rem;
}
.pr-UserCard__detail {
  display: flex;

}
.pr-UserCard__col {
  flex-grow: 1;
}
.pr-UserCard dl {
  margin: 0;
}
dt:after {
  content: ":";
}
.pr-UserCard dt, .pr-UserCard dd {
  display: inline-block;
}
.pr-UserCard dt {

}
.pr-UserCard dd {
  margin-left: 1ex;
  font-weight: bold;
}
.pr-UserCard__subTitle {
  font-weight: bold;
}
.badge {
  display: inline-block;
  border-radius: 3px;
}
.badge-danger {
  background-color: red;
}
.pr-UserCard hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
}


</style>
