<script>
import { reactive } from '@vue/composition-api'
import usexStore from '@/global/xStore.js'
import VideoModal from '../components/VideoModal'
import 'vue-awesome/icons/times'
export default {
    components: {
      VideoModal
    },
    setup(){
      const { xState } = usexStore()
      const homeState = reactive({
          vModal: false,
          _embed: []
      })
      function toggleVideoModal() {
        homeState.vModal = !homeState.vModal
      }
      function highlight(abc){
         toggleVideoModal();
        homeState._embed = abc
        
      }
        return{
          xState,
          homeState,
          highlight,
          toggleVideoModal
        }
    }
}
</script>

<template>
<div>
  <!-- Video Modal -->
  <div v-if="homeState.vModal">
    <VideoModal :embed="homeState._embed">
      <v-icon slot="btn1" name="times" scale="2" @click="toggleVideoModal()" class="hover:text-green-400 dark:text-gray-100"/>
    </VideoModal>
  </div>
  <!-- Main Section -->
<section class="text-gray-600 body-font">
  <div class="container mx-auto md:px-5 md:py-20"> 
    <!-- video header -->
    <div class="flex flex-wrap w-full px-5 mb-20">
      <div class="w-full mb-6 lg:w-1/2 lg:mb-0">
        <h1 class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font dark:text-gray-100">Video Highlights & Results</h1>
        <div class="w-20 h-1 bg-green-500 rounded"></div>
      </div>
      <p class="w-full leading-relaxed text-gray-500 lg:w-1/2 dark:text-gray-100">Latest Highlights Football and Goals from major leagues of high Quality with a single click, Huge community of football fans from around the world. One stop for Football highlights, Soccer Highlights and Football stats. Never miss a game of Football with us. </p>
    </div>
    <!-- video items -->
    <div class="flex flex-wrap">
      <div v-for="(item, index) in xState.data" :key="index" class="p-4 xl:w-2/6 md:w-1/2">
        <div class="p-6 bg-gray-100 rounded-lg dark:bg-dark2">
          <img class="object-cover object-center w-full h-40 mb-6 rounded" :src="item.thumbnail" alt="content">
          <h3 class="text-xs font-medium tracking-widest text-green-500 dark:text-green-400 title-font">{{ item.competition.name }}</h3>
          <h2 class="mb-4 text-lg font-medium text-gray-900 title-font dark:text-gray-100">{{ item.title }}</h2>
          <!-- <p class="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> -->
          <!-- highlights button cover -->
          <div class="flex overflow-x-auto overflow-y-hidden bg-green-100 rounded-md btn-cover-max-w">
             <div v-for="(xyz, index) in item.videos" :key="index" class="m-5">
               <!-- highlight button -->
               <div class="flex flex-col items-center justify-center">
                 <div @click="highlight(xyz.embed)" class="rounded-full h-10 w-10 px-0.5 py-0.5 border-2 border-red-600">
                   <img :src="item.thumbnail" class="w-full h-full rounded-full" alt="...">
                 </div>
                 <div>
                   <span class="text-sm whitespace-nowrap">{{ xyz.title }}</span>
                 </div> 
               </div>
             </div> 
          </div>

        </div>
      </div>     
    </div>
  </div>
</section>
</div>
</template>

<style lang="scss" scoped>
.btn-cover-max-w{

  max-width: 15rem;

  @media (min-width: 200px ){
      max-width: 12.5rem;      
  }

  @media (min-width: 350px ){
      max-width: 18.4rem;      
  }

  @media (min-width: 400px ){
      max-width: 20.7rem;      
  }

  @media (min-width: 500px ){
      max-width: 28.7rem;      
  }

  @media (min-width: 768px ){
      max-width: 100%;      
  }
}
</style>