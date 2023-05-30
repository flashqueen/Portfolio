<template>
  <div class="slide" v-bind:class="[whereAmI]">
    <img v-bind:src="img" alt="img" class="slide-img">
    <div class="slide-bullets">
        <div v-for="n in count" :key="n" class="slide-bullet" v-bind:class="{'bullet-on' :n === currentId ? true : false}">
        </div>
    </div>
    <div class="right-arrow" @click="$emit('direction', 'right')">
        <div class="arrow-pos-div">
            <img src="/arrow.png" alt="arrow" class="right-arrow-pic"/>
        </div>
    </div>
    <div class="left-arrow" @click="$emit('direction', 'left')">
        <div class="arrow-pos-div">
            <img src="/arrow.png" alt="arrow" class="left-arrow-pic"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SlideShow",
    props: ["data", "img", "myId", "currentId","count"],
    computed: {
        whereAmI: function() {
            if(this.myId > this.currentId){
                return{
                    "slide-right": true,
                    "slide-left": false,
                }
            }else if(this.myId < this.currentId) {
                return {
                    "slide-right": false,
                    "slide-left": true,
                }
            }else {
                return {
                    "slide-right": false,
                    "slide-left": false,
                }
            }
        }
    }
}
</script>

<style>
.slide{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    /* background-color: blueviolet; */
    height: 48vh;
}

.slide-right {
    opacity: 0;
    visibility: hidden;
}

.slide-left {
    opacity: 0;
    visibility: hidden;
}

.slide-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.right-arrow {
    position: absolute;
    right: 10px;
    top: 30%;
    height: 200px;
    width: 75px;
    /* background-color: rgba(255, 255, 255, 0.3); */
}

.left-arrow {
    position: absolute;
    left: 10px;
    top: 30%;
    height: 200px;
    width: 75px;
    /* background-color: rgba(255, 255, 255, 0.3); */
}

.arrow-pos-div {
    position: relative;
    width: 100%;
    height: 100%;
}

.right-arrow-pic {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 250px;
    filter: invert(90%);
    opacity: 0.3;
    transition: .5s;
}

.right-arrow-pic:hover {
    opacity: 1;
}

.left-arrow-pic {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) rotate(180deg);
    width: 60%;
    height: 250px;
    filter: invert(90%);
    opacity: 0.3;
    transition: .5s;
}

.left-arrow-pic:hover {
    opacity: 1;
}

.slide-bullets{
    height: 11px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -60px) scale(0.1);
    display: flex;
}

.slide-bullet{
    height: 200px;
    border-radius: 50%;
    background-color: transparent;
    border: 3px solid #fff;
    position: relative;
}

.slide-bullet::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    content: "";
    width: 150px;
    height: 130px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0;
    transition: 1s;
}

.bullet-on:after{
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}
</style>