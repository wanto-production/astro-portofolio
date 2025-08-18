import { Motion } from "solid-motionone";
import { SkillBar, SkillStat } from "./skill";

export function AboutMeSection() {
  return (
    <>
      <section
        class="w-full min-h-screen h-fit p-6 bg-nishimiya-light text-nishimiya-dark flex items-center border-t-2 border-t-nishimiya-pink border-dashed">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-nishimiya-pink mb-6">👨‍💻 About Me</h2>

          <p class="text-base md:text-lg leading-relaxed">
            My journey started with an old, barely functioning laptop. I first
            touched programming through Scratch, dragging colorful blocks on
            screen. Curiosity led me to open VSCode and write my first lines of
            HTML. Soon, I jumped into React without fully understanding JavaScript
            — and failed, but kept going.
          </p>

          <p class="mt-4 text-base md:text-lg leading-relaxed">
            Through persistence and late nights, I gradually built real apps. I
            fell in love with clean code and fast feedback loops. Today, I proudly
            craft projects using
            <span class="font-semibold text-nishimiya-pink">TypeScript</span>,
            <span class="font-semibold text-nishimiya-pink">NeoVim</span>, and
            modern frameworks like <span class="italic">Nuxt</span>,
            <span class="italic">SvelteKit</span>, and
            <span class="italic">AdonisJS</span>.
          </p>

          <p class="mt-4 text-base md:text-lg leading-relaxed">
            I’m still learning, still building, and always excited to solve
            meaningful problems with code.
          </p>
        </div>
      </section>


    </>
  )
}

export function SkillsSection() {
  return (
    <section class="w-full min-h-screen p-6 bg-nishimiya-soft text-nishimiya-dark flex items-center">
      <div class="max-w-6xl mx-auto px-4 w-full">
        <h2 class="text-3xl font-bold text-center mb-8 text-nishimiya-pink">
          💡 My Skill 🏋🏼
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Programming Languages */}
          <Motion.div hover={{ scale: 1.01 }} class="bg-white rounded-xl p-5 shadow-md flex flex-col">
            <h3 class="text-lg font-semibold mb-4 text-nishimiya-pink">
              Programming Languages
            </h3>
            <SkillBar name="JavaScript/TypeScript" percentage={90} color="bg-nishimiya-pink" />
            <SkillBar name="Golang" percentage={40} color="bg-blue-300" />
            <SkillBar name="Python" percentage={40} color="bg-blue-200" />
          </Motion.div>

          {/* Frameworks */}
          <Motion.div hover={{ scale: 1.01 }} class="bg-white rounded-xl p-5 shadow-md flex flex-col">
            <h3 class="text-lg font-semibold mb-4 text-nishimiya-pink">
              Frameworks & Tools
            </h3>
            <ul class="list-disc ml-5 space-y-1 text-sm">
              <li>Next.js</li>
              <li>SvelteKit</li>
              <li>Nuxt</li>
              <li>AdonisJS</li>
              <li>AstroJS</li>
            </ul>
          </Motion.div>

          {/* Calisthenic Stats */}
          <Motion.div hover={{ scale: 1.01 }} class="bg-white rounded-xl p-5 shadow-md flex flex-col">
            <h3 class="text-lg font-semibold mb-4 text-nishimiya-pink">
              Calisthenic Stats
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <SkillStat label="Push-Ups" value="30" />
              <SkillStat label="Pull-Ups" value="15" />
              <SkillStat label="Sit-Ups" value="20+" />
              <SkillStat label="Level" value="Lv. 2" />
            </div>
          </Motion.div>
        </div>
      </div>
    </section >
  );
}

export function FunfactSection() {
  return (
    <section class="w-full min-h-screen h-fit p-6 bg-nishimiya-light flex items-center text-nishimiya-dark">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-6 text-nishimiya-pink">
          🎉 Fun Facts About Me
        </h2>
        <ul class="text-lg space-y-4">
          <li>👨‍💻 A young programmer with big ambition</li>
          <li>
            🎬 Huge fan of anime (especially slice-of-life and romance genres)
          </li>
          <li>💪 Loves doing calisthenics every morning</li>
          <li>
            🧩 Enjoys exploring new frameworks while listening to anime lo-fi
          </li>
        </ul>
      </div>
    </section>

  )
}
