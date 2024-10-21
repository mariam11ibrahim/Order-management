import OBtn from './components/button.vue';
import OInput from './components/inputs/input.vue';
import OSelect from './components/inputs/select.vue';
import OCard from './components/card.vue';
import OLogo from './components/logo.vue';
import OPage from './components/page.vue';
import OLoading from './components/loading.vue';
// import OMessage from './components/message.vue';
// import HelloWorld from './components/HelloWorld.vue'


export const registerGlobalComponents=({app})=>{
  app.component('OBtn', OBtn)
  app.component('OInput', OInput)
  app.component('OCard', OCard)
  app.component('OLogo', OLogo)
  app.component('OPage', OPage)
  app.component('OSelect', OSelect)
  app.component('OLoading', OLoading)
}