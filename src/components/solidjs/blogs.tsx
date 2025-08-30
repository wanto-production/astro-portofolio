import { createSignal, For, Show, createMemo } from "solid-js";
import { Motion } from "solid-motionone";
import type { CollectionEntry } from "astro:content";

type Props = {
  blogs: CollectionEntry<"blog">[];
};

export default function BlogComponent(props: Props) {
  const [search, setSearch] = createSignal("");
  const [selectedTag, setSelectedTag] = createSignal("");

  const tags = createMemo(() => {
    const set = new Set<string>();
    props.blogs.forEach(b => b.data.tags?.forEach(t => set.add(t)));
    return [...set];
  });

  const filtered = createMemo(() => {
    const keyword = search().toLowerCase().trim();
    const tag = selectedTag();

    return [...props.blogs] // clone dulu biar bisa sort
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .filter(blog => {
        const titleMatch = blog.data.title.toLowerCase().includes(keyword);
        const tagMatch = !tag || blog.data.tags?.includes(tag);
        return titleMatch && tagMatch;
      });
  });


  return (
    <div class="max-w-6xl mx-auto">
      {/* 🔍 Filter */}
      <div class="mb-12 sticky top-[60px] z-20 bg-nishimiya-light/90 backdrop-blur-md py-4 rounded-xl shadow-md px-4">
        <div class="grid gap-4 md:grid-cols-2 items-center">
          <input
            type="text"
            value={search()}
            onInput={(e) => setSearch(e.currentTarget.value)}
            placeholder="Search by title..."
            class="normal-case w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nishimiya-pink"
          />
          <select
            value={selectedTag()}
            onChange={(e) => setSelectedTag(e.currentTarget.value)}
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nishimiya-pink"
          >
            <option value="">All Tags</option>
            <For each={tags()}>{(tag) => <option value={tag}>{tag}</option>}</For>
          </select>
        </div>
      </div>

      {/* 🔁 Blog Grid */}
      <div class={`grid gap-6 ${filtered()?.length === 1 ? "grid-cols-1 place-items-center" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        <Show when={filtered()?.length > 0} fallback={
          <div class="col-span-full text-center text-gray-500 py-12">
            🔍 No results found for "<strong>{search()}</strong>"
          </div>
        }>
          <For each={filtered()}>
            {(blog, i) => (
              <Motion.div
                class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col w-full max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i() * 0.1, duration: 0.5, easing: "ease-in-out" }}
              >
                <a href={`/blog/${blog.slug}`} class="block h-full">
                  <Show when={blog.data.thumbnail} fallback={
                    <div class="flex justify-center items-center h-48 w-full bg-nishimiya-soft">
                      <p>No image</p>
                    </div>
                  }>
                    <img
                      src={blog.data.thumbnail}
                      alt={blog.data.title}
                      loading="lazy"
                      class="h-48 w-full object-cover"
                    />
                  </Show>

                  <div class="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h2 class="text-xl font-semibold text-nishimiya-pink">
                        {blog.data.title}
                      </h2>
                      <p class="text-xs text-gray-500">
                        {new Date(blog.data.date).toDateString()}
                      </p>
                      <p class="text-xs text-blue-500">
                        lang: {blog.data.lang}
                      </p>
                      <p class="text-sm mt-2 text-nishimiya-dark/80 line-clamp-3">
                        {blog.data.description}
                      </p>
                    </div>
                    <p class="mt-4 text-blue-500 text-sm hover:underline">📖 Read more</p>
                  </div>
                </a>
              </Motion.div>
            )}
          </For>
        </Show>
      </div>
    </div>
  );
}

