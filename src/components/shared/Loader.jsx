import React from 'react'

const Loader = () => {
  return (
<div className='flex items-center justify-center pt-8 dark:bg-gray-900'>
  <div className='container'>  
    <div class="flex items-center justify-center flex-col">
        <div
        class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-#38bdf8-500 mx-auto"
        ></div>
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p class="text-zinc-600 dark:text-zinc-400">
        Loading products...
        </p>
    </div>
  </div>
</div>
  )
}

export default Loader