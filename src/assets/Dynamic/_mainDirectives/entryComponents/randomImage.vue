
<style scoped>
 
</style>

<template>
<div style="mainCont">
    <img width="100%" height="700" v-bind:src="currentImageAddr" />
</div>
</template>

<script>

export default{
    data:function(){
        return {
            randomImages:[
                "http://www.wallpapers4u.org/wp-content/uploads/world_of_warcraft_blood_elf_energy_girl_eyes_16277_1920x1080.jpg",
                 "http://jonvilma.com/images/wow-girl-4.jpg",
                 "https://images7.alphacoders.com/411/thumb-1920-411820.jpg",
                 "https://images3.alphacoders.com/823/thumb-1920-82317.jpg",
                 "https://www.planwallpaper.com/static/images/6813800-toy-car-wallpaper-hd_SBxvMEh.jpg",
                 "http://files.all-free-download.com//downloadfiles/wallpapers/1920_1080/colors_explosion_wallpaper_abstract_3d_45.jpg",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffZSrioashmxjeZeayDrFd-_A90eAk8hDTm5GuOJ1r8vqv8x9",
                 "https://www.planwallpaper.com/static/images/3865967-wallpaper-full-hd_XNgM7er.jpg"
            ],
            currentImageAddr:'http://www.wallpapers4u.org/wp-content/uploads/world_of_warcraft_girl_elf_bow_16249_1920x1080.jpg'
        }
    },created(){
        this.randomiseImageSelector();
    

    },methods:{
        randomiseImageSelector(){
            var home=this;
            var totalSizeOfImagesArray= home.randomImages.length;
            var index= Math.floor(Math.random() * totalSizeOfImagesArray);
            home.currentImageAddr= home.randomImages[index];
            return;
            //choose an image from the randomImage array and set one as the current
     
        }
    }
}

</script>