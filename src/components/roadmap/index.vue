<template>
    <div class="py-24 sm:py-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:py-8">
            Roadmap
        </h2>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 sm:py-10">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-md font-medium text-red-700 ring-1 ring-inset ring-red-600/10 w-64 justify-center">
                    WildCats game
                </span>
              </dt>
              <dt class="text-base leading-7 text-gray-600">
                <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-md font-medium text-red-700 ring-1 ring-inset ring-red-600/10 w-64 justify-center">
                    NTFs for the game
                </span>
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 xs:text-5xl">To Do</dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-md font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 w-64 justify-center">
                    NFTs of WildCat
                </span>
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 xs:text-5xl">
                In Progress
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-md font-medium text-green-700 ring-1 ring-inset ring-green-600/20 w-64 justify-center">
                    Publicity and social networks
                </span>
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 xs:text-5xl">Completed</dd>
            </div>
          </dl>
        </div>
    </div>
</template>
<script>
export default {
  name: 'RoadmapComponent'
}
</script>