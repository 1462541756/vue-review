<template>
  <div  v-theme:column ="'column'"  id="show-blog">
    <input type="text" v-model="search" placeholder="search"/>
    <div v-for="(blog,index) in filteredBlogs" :key="blog.title+index" class="single-blog">
      <router-link :to="'/singleBlog/'+blog.id">
        <h2 v-rainbow>{{blog.title|toUpperCase}}</h2>
        <article>
          {{blog.content|snipped}}
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowBlogs",
    data() {
      return {
        blogs: [],
        search:""
      }
    },
    filters:{
      "toUpperCase":function (value) {
        return value.toUpperCase();
      },
      snipped(value){
        return value.slice(0,100)+"..."
      }
    },
    computed:{
      filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.toLowerCase().replace(/\s*/g, "").match(this.search.toLowerCase().replace(/\s*/g, ""));
        })
      }
    },
    created() {
      this.$http.get("http://localhost:3000/posts")
        .then(res => {
          console.log(res);
          this.blogs = res.body;

        })
    }
  }

</script>

<style scoped>
#show-blog{
  margin: 20px auto;
  padding: 20px;
  max-width: 800px;
}
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
