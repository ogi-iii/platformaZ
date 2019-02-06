$(function() {
    $('.slider').slick({
        autoplay:true,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>'
    });
});

Vue.component('content-template', {
    template: `
    <div class="component">
      <ul>
      <transition>
        <li class="componentBefore" v-if="BAtoggle" key="before">
          <slot name="imgB"></slot>
          <p><slot name="titleB">before</slot></p>
        </li>
        <li class="componentAfter" v-else kye="after">
          <slot name="imgA"></slot>
          <p><slot name="titleA">after</slot></p>
        </li>
      </transition>
      </ul>
      <p class="componentComment">
      <slot name="comment"></slot>
      </p>
      <button type="button" class="changeBA" v-on:click="cahngeBAtoggle"><slot name="button">before/after</slot></button>
    </div>
`,
data: function() {
  return {
    BAtoggle: true

  }
},
methods: {
  cahngeBAtoggle() {
    this.BAtoggle=!this.BAtoggle
  }
}
})

var vueJs = new Vue({
    el: '#app',
    data: {
    },
    methods: {
    }
  })
