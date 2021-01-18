<script>
import 'vue-awesome/icons/bars';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/arrow-alt-circle-right';
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/file-alt';
import 'vue-awesome/icons/user-alt';
import { reactive } from '@vue/composition-api'
import Theme from './Theme.vue';


export default {
    components: {
        Theme,
        
    },
    setup () {
        const state = reactive({
            sidebarState: false,
        })

        function toggleSidebar(){
            this.state.sidebarState = !this.state.sidebarState
        }

        function homepage(){
            location.href = 'http://metro-xix.web.app';
        }
        
        return {
            state,
            toggleSidebar,
            homepage
        }
    }
}

</script>

<template>
<div>
    <div class="w-full h-4 bg-black"></div>
    <div class="bg-transparent header-content">
        <div class="items-center justify-center logo dark:text-gray-50" @click="homepage()">
            <img src="@/assets/img/logo.png" alt="" class="p-2 w-14 h-14 md:w-16 md:h-16" />
            <div class="logo-inner">Metro</div>-sports
        </div>
        <div class="hidden-theme"><Theme/></div>
        <div class="text-black header-link-cover">
            <ul>
                <li>
                    <router-link to="/" class="header-link dark:text-gray-50">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="header-link dark:text-gray-50">About</router-link>
                </li>
            </ul>
            <div class="sidebar-open-button-cover">
                <v-icon name="bars" @click="toggleSidebar()" class="sidebar-open-button dark:text-gray-50" scale="2" />
            </div>
        </div>
    </div>
     <!-- sidebar -->
    <div v-if="this.state.sidebarState">
        <div class="sidebar-background" @click="toggleSidebar()"></div>
        <div class="sidebar-nav">
            <div class="sidebar-close-button-cover"> <div class="sidebar-close-button-cover-item-one"><Theme/></div> <v-icon name="times" class="close-button" scale='2.2' @click="toggleSidebar()"/></div>
            <ul>
                <li>
                    <router-link to="/" class="sidebar-button"><v-icon name="home" class="v-icon-li"/>Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="sidebar-button"><v-icon name="arrow-alt-circle-right" class="v-icon-li"/>About</router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- end sidebar -->
</div>
</template>


<style lang="scss" scoped>
.header-content{
    display: flex;
    color: white;
    width: 100%;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media(max-width: 768px){
        display: flex;
        padding-bottom: 12px;
        padding-top: 10px;
    }
}
.logo{
    font-size: 30px;
    padding: 10px 20px;
    display: flex;
    color: black;
    &-inner{
        font-size: 30px;
        color: $neon-green;
         @media (max-width: 768px ){
            font-size: 20px;
        }
    }
    @media (max-width: 768px ){
        font-size: 20px;
    }
}
.header-link-cover{
    display: flex;
    align-items: center;
    margin-right: 30px;
    @media(max-width: 768px){
        margin-right: 6px;
    }
}
.header-link-cover ul{
    display: flex;
    @media(max-width: 768px){
        display: none;
    }
}
.header-link{
    text-decoration: none;
    margin-left: 10px;
    &:hover{
        color: $neon-green;
        border-bottom: 2px solid $neon-green;
        padding-bottom: 3px;
    }
}
body.dark .header-link:hover{
    color: #34D399;
}
.header-link-cover a.router-link-exact-active {
  color: $neon-green;
}
body.dark .header-link-cover a.router-link-exact-active {
  color: #34D399;
}
.sidebar-background{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.1);
}
.sidebar-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: black;
    width: 200px;
    transition: 350ms;
}
.sidebar-open-button{
    margin-left: 20px;
    &-cover { & :hover{
        color: $neon-green;
        }
    }
    @media(max-width: 768px){
        margin-right: 15px;
    }   
}
.sidebar-close-button-cover{
    display: flex;
    margin-left: 2rem;
    font-size: 2rem;
    height: 85px;
    margin-right: 1rem;
    height: 60px;
    justify-content: space-around;
    align-items: center;
    color: white;
    .close-button { &:hover{
        color: $neon-green; 
        }
    }
    @media(max-width: 768px){
        padding-top: 12px;
        padding-right: 10px;
    }
}
.sidebar-button{
    display: flex;
    height: 60px;
    padding: 20px;
    color: white;
    &:hover {
        background: #252831;
        border-left: 5px solid $neon-green;
        border-right: 5px solid  $neon-green;
        color: $neon-green;
        cursor: pointer;
    }
}
.sidebar-nav a.router-link-exact-active{
    color:  $neon-green;
}
.v-icon-li{
    margin-right: 10px;
}
.sidebar-close-button-cover-item-one{
    margin-bottom: 8px;
    &:hover{
        color: $neon-green;
    }
}
.hidden-theme{
    display: none;
}
</style>
