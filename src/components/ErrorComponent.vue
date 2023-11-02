<template>
    <div v-if="error" class="error">
        {{ error }}
    </div>
</template>

<script>
    export default {
        props: ['error'],
    };
</script>

<style lang="scss" scoped>
    .error {
        color: $red;
        @include user-title;
    }
</style>
