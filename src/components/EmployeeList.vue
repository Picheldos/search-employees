<template>
    <div class="employee-list">
        <div class="employee-list__title">Результаты</div>
        <div class="employee-list__wrapper">
            <div v-if="!employees.length && !nothingFound" class="employee-list__wrapper_label">
                начните поиск
            </div>
            <div class="employee-list__wrapper_label" v-if="nothingFound">
                ничего не найдено
            </div>
            <EmployeeCard
                    v-for="employee in employees"
                    :key="employee.id"
                    :employee="employee"
                    @click="selectEmployee(employee)"
            />
        </div>
    </div>
</template>

<script>
    import EmployeeCard from './EmployeeCard.vue';
    import { mapState, mapActions } from 'vuex';

    export default {
        components: {
            EmployeeCard
        },
        computed: {
            ...mapState(['employees', 'loading', 'nothingFound']),
        },
        methods: {
            ...mapActions(['selectEmployee']),
        },
    }
</script>

<style scoped lang="scss">
    .employee-list {
        display: flex;
        flex-direction: column;
        height: 100%;

        &__title {
            @include title;
            color: $darkGray;
            margin-left: vw(20);
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow-y: auto;

            &_label {
                @include label;
                color: $gray;
                margin-left: vw(20);
                margin-top: vw(10);
            }
        }
    }
</style>