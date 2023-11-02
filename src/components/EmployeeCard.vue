<template>
    <div class="employee-card" >
        <div class="employee-card__img">
            <img src="../assets/images/avatar.png" alt="avatar">
        </div>
        <div class="employee-card__info" :class="{'active':selectedEmployee===employee}">
            <h3>{{ employee.username }}</h3>
            <p>{{ employee.email }}</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        props: {
            employee: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapState(['selectedEmployee'])
        }
    }
    //ПРОСТАВИТЬ МАРГИНЫ, АКТИВНЫЙ ПРОВЕРЯТЬ С СЕЛЕКТЕД ИМПЛОЕ
</script>

<style scoped lang="scss">
    .employee-card {
        display: flex;
        flex-direction: row;
        height: vw(70);
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        margin: vw(18) vw(31) 0 vw(20);

        &:hover {
            cursor: pointer;
            .employee-card__info {
                background-color: $borderColor;
            }
        }

        &__img {
            width: vw(70);
            height: vw(70);

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        &__info {
            padding: vw(15);
            width: vw(170);

            border-left: 1px solid $borderColor;

            transition: background-color 0.3s ease-in-out;
            border-radius: 0 10px 10px 0;

            &.active {
                background-color: $borderColor;
            }

            h3 {
                @include user-title;
                margin-bottom: 5px;
            }

            p {
                margin: 0;
                @include label;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>