<template>
  <ul class="categories-list">
    <li
      v-for="(value, key) in categories"
      :key="key"
      :class="{ active: current === key }"
      @click="onClick(key)"
    >
      <a href="javascript:">
        <span>{{ value }}</span>
      </a>
    </li>
    <div class="clearfix" />
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      current: 'all'
    }
  },
  methods: {
    onClick (key) {
      this.current = key
      this.$emit('active', key)
    }
  }
}
</script>

<style scoped>
  ul.categories-list {
    list-style-type: none;
    margin-top: -88px;
    z-index: 9999;
    padding: 20px 15px;
    position: relative;
    border: 0;
    z-index: 1;
    background-color: #5d4a8e;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    width: 100%;
  }

  ul.categories-list>li {
    float: left;
    display: block;
    padding: 3px 0;
  }

  ul.categories-list>li>a {
    display: block;
    text-align: center;
    padding: 12px 12px;
    font-weight: 600;
    border-radius: 30px;
    font-size: 12px;
    margin-left: 0px;
    margin-right: 10px;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    transition: background .2s;
  }

  ul.categories-list>li>a:hover,
  ul.categories-list>li.active>a {
    color: #6d4eba;
    background: white;
  }
</style>
