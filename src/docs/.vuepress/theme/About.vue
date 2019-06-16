<template>
  <div class="about py-md-5 px-0 py-4">
      <div>
          <h2 class="mb-4">
              About Hyunjin Yoon
          </h2>
          <div>
              <div class="text-secondary">
                  Front-End Developer or Product Designer<br>
                  5년동안 프로덕트 디자이너로 일했고 Front-End 공부를 하고 있는 윤현진입니다.              
              </div>
              <div class="d-flex mt-2">
                <div>               
                    <a href="https://github.com/hyunjinyoon-christine" target="_blank" class="text-secondary mr-1">
                        <i class="fab fa-github fa-lg hover-color"></i>
                    </a>                
                    <a href="https://www.linkedin.com/in/hyunjin-yoon-851971a6" target="_blank" class="text-secondary mr-1">
                        <i class="fab fa-linkedin fa-lg hover-color"></i>
                    </a>
                    <a href="https://medium.com/@moriwilly" target="_blank" class="text-secondary mr-1">
                        <i class="fab fa-medium-m fa-lg hover-color"></i>
                    </a>
                    <a href="facebook.com/HyunjinYoonMe" target="_blank" class="text-secondary">
                        <i class="fab fa-facebook-square fa-lg hover-color"></i>
                    </a>
                </div>
              </div>              
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-md-6">

              </div>
              <div class="col-md-6">

              </div>              
          </div>
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
@import '~styles/theme'
</style>
