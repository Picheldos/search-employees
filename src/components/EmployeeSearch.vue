<template>
    <div class="employee-search">
        <div class="employee-search__title">Поиск сотрудников</div>
        <input class="employee-search__input" type="text" v-model="searchQuery" @input="search" placeholder="Введите Id или имя ">
        <div v-if="loading" class="employee-search__preloader">Загрузка...</div>
        <ErrorComponent :error="error" />
    </div>
</template>

<script>
    import ErrorComponent from './ErrorComponent.vue';
    import { mapState, mapActions } from 'vuex';

    export default {
        components: {
            ErrorComponent,
        },
        data() {
            return {
                searchQuery: '',
            }
        },
        computed: {
            ...mapState(['employees', 'loading', 'error']),
        },
        methods: {
            ...mapActions([
                'searchEmployeesByIds',
                'searchEmployeesById',
                'searchEmployeesByUsernames',
                'searchEmployeesByUsername',
                'setNothingFound',
                'selectEmployee', 'setError', 'clearEmployees'
            ]),

            async search() {
                if (this.searchQuery === '') {
                    this.selectEmployee(null);
                    this.clearEmployees();
                    this.setNothingFound(false);
                    return;
                }

                const queries = () => {
                    const queriesArray = this.searchQuery.split(/[ ,]+/).filter(query => query.trim() !== '');

                    return queriesArray.map((query) => {
                        return query.charAt(0).toUpperCase() + query.slice(1);
                    });
                }

                if (queries().length > 1) {
                    const isNumeric = queries().every(item => !isNaN(item));
                    const isAlphabetic = queries().every(item => isNaN(item));

                    if (isNumeric && !isAlphabetic) {
                        await this.searchEmployeesByIds(queries());
                    } else if (!isNumeric && isAlphabetic) {
                        await this.searchEmployeesByUsernames(queries());
                    } else {
                        this.setError('Поиск должен осуществляться либо по ID, либо по имени.');
                    }

                    return;
                }

                !isNaN(queries()[0]) ?
                    await this.searchEmployeesById(queries()[0]) :
                    await this.searchEmployeesByUsername(queries()[0]);

                this.setNothingFound(this.employees.length === 0);
            },
        },
    }
</script>

<style scoped lang="scss">
    .employee-search {
        display: flex;
        flex-direction: column;
        padding-left: vw(20);
        padding-right: vw(20);

        &__title {
            @include title;
            color: $darkGray;
        }

        &__input {
            width: 100%;

            padding: vw(16) vw(24);
            margin: vw(22) 0;

            border-radius: 8px;
            color: $gray;
            border: 1.5px solid $lightGray;

            @include label;
        }
    }
</style>
