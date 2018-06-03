
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
                 "https://www.planwallpaper.com/static/images/3865967-wallpaper-full-hd_XNgM7er.jpg",
                 "https://images2.alphacoders.com/240/thumb-1920-240942.jpg",
                 "http://www.wallpapers4u.org/wp-content/uploads/the_walking_dead_rick_grimes_andrew_lincoln_rick_grimes_andrew_lincoln_blood_sprays_drops_vector_93648_1920x1080.jpg",
                 "https://wallpaper-house.com/data/out/6/wallpaper2you_91394.jpg",
                 "https://cdn.suwalls.com/wallpapers/tv-shows/the-governor-the-walking-dead-28928-1920x1080.jpg",
                 "https://images5.alphacoders.com/320/thumb-1920-320813.jpg",
                 "http://hdlatestwallpaper.com/wp-content/uploads/2014/09/quotes-typography-life-true-story.png",
                 "https://i.pinimg.com/originals/83/ca/7d/83ca7d6c44648e9ecec9916b704c121f.jpg",
                 "http://wallpaperlepi.com/wp-content/uploads/2015/05/Life-Daily-Quote-Image.jpg",
                 "https://i.ytimg.com/vi/gS1yiw_Fk_0/maxresdefault.jpg",
                 "http://hdfreewallpaper.net/wp-content/uploads/2015/09/life-quote-hd-wallpaper-for-iphone-free-for-desktop.jpg",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaPHVIDT_mGlsHfMxLhwONngOaMRawrbn8iTdV_-FXx5Pl4jAqA",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbQEbJl4X2RlQNSuPUUWN1xkpWqWCd48BUBsTqy069cmbpHHM",
                 "http://caskia.me/wp-content/uploads/2018/03/inspirational-wallpaper-motivational-quote-hd-72-with.jpg",
                 "https://cdn.geckoandfly.com/wp-content/uploads/2013/11/big_e1af6ac372155c7877b60aa0e64aa1dbb35f4dbe.jpg",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UagiVyZQj1goUD4FIBccwf3SUt8BYhke9KKp4dxO6sQhKghGXg",
                 "https://quotefancy.com/media/wallpaper/1600x900/19238-Ryan-Blair-Quote-If-it-is-important-to-you-you-will-find-a-way-If.jpg",
                 "https://quotefancy.com/media/wallpaper/1600x900/2001886-Woody-Allen-Quote-Eighty-percent-of-success-is-showing-up.jpg",
                 "https://i.pinimg.com/originals/b3/a4/20/b3a42078dcd87186241df58c948ba6a5.jpg"
            ],
            currentImageAddr:'http://www.androidguys.com/wp-content/uploads/2016/05/Poly-Lakeside.jpg'
        }
    },created(){
        //this.randomiseImageSelector();
    

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