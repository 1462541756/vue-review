<template>
  <div id="single-blog">
    <p>标题：{{blog.title}}</p>
    <p>内容：</p>
    <article >{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">
        {{category}}
      </li>
    </ul>
    <div class="action">
      <button class="delete" @click="deleteSingleBlog">删除</button>
      <router-link :to="'/edit/'+id" tag="button" class="router-link-active">编辑</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SingleBlog",
      data(){
          return{
            id:this.$route.params.id,
            blog: {}
          }
      },
      methods:{
        deleteSingleBlog(){
          /* this.$http.delete('/posts/'+this.id+'.json')
             .then(response=>{
               this.$router.push({path:'/'})
             })*/

          this.$http.delete('/posts/'+this.id)
            .then(response=>{
              this.$router.push({path:'/'})
            })
        }
      },
      created(){
          this.$http.get("http://localhost:3000/posts/"+this.id)
            .then(res=>{
              console.log(res.data);
              this.blog=res.data;
            })
      }
    }
</script>

<style scoped>
  #single-blog{
    /*max-width: 960px;*/
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px solid #aaa;
  }
  article{
    padding: 0px 0 20px 50px;
  }
  .delete,.router-link-active{
    background: rgba(255, 34, 54, 0.8);
    color: #444;
    padding: 10px;
    margin: 20px;
  }
  .action{
    text-align: center;
  }
</style>
