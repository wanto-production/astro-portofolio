import { Motion } from 'solid-motionone';

export default function MotionImage() {
  return (
    <Motion.img
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ easing: 'ease-out', duration: 0.6 }}
      hover={{ scale: 1.02 }}
      src="/static/nishimiya.png"
      alt="Nishimiya"
      class=" rounded-2xl shadow-2xl w-full h-[350px] object-cover object-center"
    />
  );
}

