<script setup lang="ts">
import BasicText from '@/components/shared/text/BasicText.vue'; 
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation];
const projects = [
  {
    id: '1',
    name: 'IBIT.ASIA',
    images: [
      '/images/projects/mines.webp',
      '/images/projects/crash.webp'
    ],
    introduce: 'Ibit.asia is more than just a casino, it is a ecosystem that gives back to its players through constant rewards by leveraging $TGB.',
    skills: [
      {code: 'reactjs', name: 'ReactJS'},
      {code: 'html', name: 'HTML'},
      {code: 'nextjs', name: 'NextJS'},
      {code: 'tailwind', name: "Tailwind CSS"},
      {code: 'sass', name: 'SCSS'},
      {code: 'docker', name: 'Docker'},
      {code: 'jest', name: 'Jest'}
    ],
    link: 'https://ibit.asia/'
  },
  {
    id: '2',
    name: 'TG.BET',
    images: [
      '/images/projects/card.webp',
      '/images/projects/roulette.webp'
    ],
    introduce: 'TG.Bet is more than just a casino, it is a ecosystem that gives back to its players through constant rewards by leveraging $TGB.',
    skills: [
      {code: 'html', name: 'HTML'},
      {code: 'nextjs', name: 'NextJS'},
      {code: 'sass', name: 'SCSS'},
      {code: 'docker', name: 'Docker'},
      {code: 'jest', name: 'Jest'}
    ],
    link: 'https://tg-bet.com/'
  }
];

</script>

<template>
  <div class="relative mb-10">
    <div class="star-container">
      <div class="meteor" style="left: 401.667px; top: 40px; animation-delay: 0s;"></div>
      <div class="meteor" style="left: 100.667px; top: 40px; animation-delay: 0.084626s;"></div>
      <div class="meteor" style="left: 342.667px; top: 40px; animation-delay: 0.134626s;"></div>
      <div class="meteor" style="left: 511.667px; top: 40px; animation-delay: 0.234626s;"></div>
      <div class="meteor" style="left: 642.667px; top: 40px; animation-delay: 0.334626s;"></div>
      <div class="meteor" style="left: 723.667px; top: 40px; animation-delay: 0.91265s;"></div>
      <div class="meteor" style="left: 883.667px; top: 40px; animation-delay: 1.21265s;"></div>
      <div class="meteor" style="left: 1124.67px; top: 40px; animation-delay: 5.6315s;"></div>
    </div>

    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }" navigation>
      <swiper-slide class="slide skill-item" v-for="item in projects">
        <div class="grid grid-cols-2 overflow-hidden gap-4 justify-center text-center">
          <img v-for="image in item.images" class="image" :src="image" alt="feedback-logo" />
          <div class="text">{{item.name}}</div>
        </div>
        <div class="flex flex-col gap-4 md:gap-8">
          <div class="flex flex-col gap-2">
            <BasicText value="Introduce" is-fantasy-text class-name="text-[aliceblue]" />
            <span class="text-[burlywood]">{{item.introduce}}</span>
          </div>

          <div class="flex flex-col gap-2">
            <BasicText value="My Skill" is-fantasy-text class-name="text-[aliceblue]" />
            <div class="flex gap-3 flex-wrap">
              <div class="tag" v-for="skill in item.skills">
                <span>{{skill.name}}</span>
                <img class="rounded-full object-cover w-4 h-4" :src="`/images/skills/${skill.code}.png`" alt="skill" />
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <BasicText value="Domain" is-fantasy-text class-name="text-[aliceblue]" />
            <a :href="item.link" target="_blank" class="text-[burlywood] underline">{{item.link}}</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.skill-item {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 8px;
  transition: all .3s;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
  }

  &.active {
    display: grid;
    height: 100%;
    padding: 32px;
  }
}
.star-container {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    z-index: -1;
    // https://images.pexels.com/photos/2240000/pexels-photo-2240000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
    background: no-repeat top / cover url('https://images.unsplash.com/photo-1506863250276-e0b65a47fed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ3NjIzfHxlbnwwfHx8fHw%3D&w=1000&q=80')
}

.star-container .meteor {
    width: 1px;
    display: block;
    position: absolute;
    background-color: transparent transparent transparent rgba(255,255,255,.5);
    opacity: 0;
    animation: meteor 5s linear infinite
}

.star-container .star {
    position: absolute;
    z-index: 9
}

.star-container .change {
    width: 50px;
    height: 50px;
    border: none;
    position: absolute;
    left: 81.8%;
    top: 169px;
    animation: myChange 8s linear
}

.star-container .star:before {
    content: "\2605";
    display: block;
    position: absolute;
    left: 10px;
    top: 20px;
    width: auto;
    height: auto;
    color: #fff;
    transform: scale(.8);
    animation: 1s starlight linear infinite;
    -webkit-animation-fill-mode: forwards -moz-animation-fill-mode forwards animation-fill-mode forwards
}

.star-container .star:after {
    content: "\2605";
    display: block;
    position: absolute;
    left: 40px;
    top: 120px;
    width: auto;
    height: auto;
    color: #fff;
    transform: scale(.8);
    animation: 2s starlight linear infinite
}

.star-container .meteor:after {
    content: "";
    display: block;
    border: 1px solid #fff;
    border-width: 0px 90px 2px 90px;
    border-color: transparent transparent transparent rgba(255,255,255,.5);
    transform: rotate(-45deg)
}

$s-min: 20;
$s-max: 70;
$l-min: 30;
$l-max: 90;
@for $i from 1 through 100 {
  .tag:nth-child(#{$i}) {
    background-color: hsl(random(360),$s-min+random($s-max+-$s-min),$l-min+random($l-max+-$l-min));
  }
}

.tag {
  display: flex;
  gap: 8px;
  border: 1px solid black;
  padding: 4px;
  border-radius: 8px;
  filter: invert(1);
  align-items: center;
}

@keyframes meteor {
    0% {
        opacity: 0
    }

    30% {
        opacity: 1
    }

    to {
        opacity: 0;
        transform: translate(-800px,100vh)
    }
}
.pentagon{
  position: absolute;
	width: 100%;
	height: 40vh;
  top: -50%;
  left: -50%;
  overflow: hidden;
	background: #4169e1;
  // clip-path: polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%);
  clip-path: polygon(0 15%, 15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%);
  border-radius: 120px;
  animation: rotatePentagon 5s normal forwards ease-in-out infinite;
}

.text {
  background-color: aliceblue;
  color: transparent;
  font: bold 4em "Poppins", sans-serif;
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
  text-shadow: 2px 2px 3px rgba(255,255,255,0.65);
  grid-column: span 2 / span 2;
}

.image { 
  object-fit: cover;
  animation: rotateYAnim 1.5s forwards, orbit 1s infinite 1s;
  border-radius: 12px;
  aspect-ratio: 1/1.68;
}

/* Add more animations for each image */

@keyframes orbit {
  0% { transform: translateY(10px); }
  50% { transform: translateY(15px); }
  100% { transform: translateY(10px); }
}

@keyframes rotateYAnim {
  0% { transform:  rotateY(0deg); }
  50% { transform: rotateY(180px); }
  100% { transform:  rotateY(360deg); }
}
</style>