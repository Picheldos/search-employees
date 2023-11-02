<template>
    <div class="sidebar">
        <EmployeeSearch />
        <EmployeeList />
    </div>
</template>

<script>
    import EmployeeSearch from "@/components/EmployeeSearch";
    import EmployeeList from "@/components/EmployeeList";


    export default {
        components: {
            EmployeeSearch,
            EmployeeList
        }
    }
</script>

<style lang="scss">
    .sidebar {
        display: flex;
        flex-direction: column;

        padding: vw(27) 0 vw(130) 0;
        height: 100%;

        min-width: vw(291);

        /*overflow-y: scroll;*/
    }
</style>