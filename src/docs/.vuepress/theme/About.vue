<template>
  <div class="about py-md-5 px-0 py-4">
    <header class="border-bottom">

      <h2 class="mb-3">
          안녕하세요, 윤현진입니다.
      </h2>
      <h3 class="font-weight-light">
        5년동안 프로덕트 디자이너로 일했고 개발 공부를 하고 있습니다.
      </h3>


      <div class="d-flex mt-3 mb-4">           
          <a href="https://github.com/hyunjinyoon-christine" target="_blank" class="text-secondary mr-2">
              <i class="fab fa-github fa-lg"></i>
          </a>                
          <a href="https://www.linkedin.com/in/hyunjin-yoon-851971a6" target="_blank" class="text-secondary mr-2">
              <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://medium.com/@moriwilly" target="_blank" class="text-secondary mr-2">
              <i class="fab fa-medium-m fa-lg"></i>
          </a>
          <a href="https://velog.io/@gamean" target="_blank" class="text-secondary position-relative">
              <img src="../../images/veloge.png" alt="" class="veloge position-absolute">
          </a>
      </div>
    </header>
    <div class="specification mt-3">
      <ul class="pl-0">
        <b class="text-primary">Experience</b>        
        <li>
          Fanmaum Digital Product Designer, Web publisher Sep 2018 – Apr 2019
        </li>
        <li>
          Publy Digital Product Designer, Web publisher Apr 2018 – Aug 2018
        </li>
        <li>
          Fanmaum Digital Product Designer, Web publisher Sep 2017 – Apr 2018
        </li>
        <li>
          Soomgo Ui Designer Oct 2016 – Aug 2017
        </li>
        <li>
          Hellomarket Ui Designer Aug 2015 – Jul 2016
        </li>
        <li>
          Camp mobile Graphic Designer Mar 2014 - Oct 2014
        </li>
      </ul>

      <ul class="pl-0">
        <b class="text-primary">skills</b>
        <li>
          Git, HTML/CSS, JavaScript, jQuery, Sass, vue-js, Sketch
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'About',
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
</style>

<style lang="scss" scoped>
@import "~styles/theme";
.veloge {
  width: 1.2rem;
  top: 4px;
}
li {
  list-style: none;
}
</style>
