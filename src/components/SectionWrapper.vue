<template>
    <section class="section-wrapper">
        <div class="section-wrapper__title">Пользователь</div>
        <div class="section-wrapper__logo">Жилфонд</div>
        <div class="section-wrapper__employees">
            <SideBar />
            <EmployeeProfile />
        </div>
    </section>
</template>

<script>
    import SideBar from "@/components/SideBar";
    import EmployeeProfile from './EmployeeProfile.vue'

    export default {
        components: {
            SideBar,
            EmployeeProfile
        }
    }
</script>

<style lang="scss">
    .section-wrapper {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;

        padding: vw(50);

        &__title {
            margin-left: auto;
            color: $darkGray;
            @include text;
        }

        &__logo {
            color: $red;
            @include logo;
            margin-bottom: vw(26);
        }

        &__employees {
            display: flex;
            flex-direction: row;

            border-radius: 10px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

            width: 100%;
            height: 100%;

            overflow: hidden;
        }
    }
</style>