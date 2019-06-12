<template>
  <section class="prev-next-links mt-5 pt-4 border-top">
    <div class="links-wrapper d-flex justify-content-between"
    :class="isContentEnd">
      <div>
        <router-link v-if="prev" class="prev" :to="prev.path">
          <div class="link-text">← {{ prev.title }}</div>
        </router-link>
      </div>
      <div>
        <router-link v-if="next" class="next" :to="next.path">
          <div class="link-text">{{ next.title }} →</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrevNextLinks',
  data () {
    return {
      postList : [],
      contentEnd: false
    }
  },
  mounted: function(){
    this.postList = this.$site.pages
    .filter(item => {
      console.log('this.$page', this.$page);
      if(this.$page.path.startsWith('/posts/')){
        return item.path.startsWith('/posts/')
      } else if (this.$page.frontmatter.bookDetail && item.title) {
        return item.path.startsWith('/book/')
      } else if (this.$page.frontmatter.blogDetail && item.title) {
        return item.path.startsWith('/blog/')
      }
    }).sort((a, b) => {
      return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
    })
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postList[i].key === this.$page.key) {
          return i;
        }
      }
    },
    prev() {
      return this.currentIndex > 0 ?
      this.postList[this.currentIndex - 1] : null;
    },
    next() {
      return this.currentIndex < this.postList.length - 1 ?
      this.postList[this.currentIndex + 1] : null;
    },
    isContentEnd() {
      return this.currentIndex > 0 ?
      'justify-content-between' : 'justify-content-end';
    }
  }
};
</script>
