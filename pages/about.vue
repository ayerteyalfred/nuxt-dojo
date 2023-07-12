<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio exercitationem saepe, sequi alias id quisquam et perferendis ipsum, ipsa laborum possimus. Voluptatem repudiandae aperiam vel voluptatum quae ex rem numquam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel exercitationem tempore beatae magni dolore. Vel quisquam, fugit non incidunt est a aspernatur ad ex, pariatur porro error corporis illo?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/ninja?name=mac', {
        method: 'post',
        body: { age: 23 }
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }
</style>