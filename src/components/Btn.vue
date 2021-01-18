<script>
export default {
    props: {
      x_href: {
        type: String,
        default: null
      },
      x_to: {
        type: String,
        default: null
      },
      choice: {
        type: String,
        default: null
      }
    },
    setup(props){
      function type() {
        if (props.x_href) {
          return 'a'
        }
         else if(props.x_to){
           return 'router-link'
         }
         else {
          return 'button'
        }
      }
      function choices(){
        return{
          primary : props.choice == 'primary',
          button : props.choice == 'normal'
        }
      }
      return{
        type,
        choices
      }
    }
    
}
</script>

<template>
<component :is="type()" :href="x_href" :to="x_to" :class="choices()">
    <slot/>
</component>
</template>

<style lang="scss" scoped>
 .button {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    background: #fff;
    border: 2px solid tomato;
    border-radius: 3px;
    color: tomato;
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    background: tomato;
    color: #fff;
  }
</style>






  computed: {
    type() {
      if (this.href_abc) {
        return 'a'
      }
        else if(this.to_abc){
          return 'router-link'
        }
        else {
        return 'button'
      }
    }
  },