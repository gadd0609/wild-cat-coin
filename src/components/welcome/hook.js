import { ref } from "vue";

export default function welcome (){
  const menuOpen = ref(true)
  console.log(menuOpen.value, 'qweqeqwe')
  function toggleMenu () {
    console.log('toggleMenu')
    menuOpen.value = !menuOpen.value
  }

  return{
    toggleMenu,
    menuOpen
  }
}
