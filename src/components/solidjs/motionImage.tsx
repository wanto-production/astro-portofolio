import { Motion } from 'solid-motionone';
import "lazysizes";
import "lazysizes/plugins/blur-up/ls.blur-up";

export default function MotionImage() {
  return (
    <Motion.img
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ easing: 'ease-out', duration: 0.6 }}
      hover={{ scale: 1.02 }}
      data-src="/static/nishimiya.png"
      alt="Nishimiya"
      class="lazyload blur-up rounded-2xl shadow-2xl w-full h-[350px] object-cover object-center"
    />
  );
}

