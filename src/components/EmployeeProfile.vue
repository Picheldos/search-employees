<template>
    <div class="employee-profile">
        <div class="employee-profile__text" v-if="!selectedEmployee">
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
        <div class="employee-profile__info" v-if="selectedEmployee">
            <div class="employee-profile__info-img">
                <img src="../assets/images/avatar.png" alt="avatar">
            </div>
            <div class="employee-profile__info-descr">
                <h2>{{ selectedEmployee.name }}</h2>
                <p><span>email: </span>{{ selectedEmployee.email }}</p>
                <p><span>phone: </span>{{ selectedEmployee.phone }}</p>
                <h3>О себе:</h3>
                <p>
                    {{aboutInfo}}
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import aboutInfo from '../assets/data/aboutEmployee.json';

    export default {
        data(){
            return {
                aboutInfo: aboutInfo.data
            }
        },
        computed: {
            ...mapState(['selectedEmployee'])
        }
    }
</script>

<style scoped lang="scss">
    .employee-profile {
        display: flex;

        width: 100%;
        height: 100%;

        border-left: 1px solid $borderColor;

        &__text {
            margin-top: vw(250);
            margin-left: vw(271);

            color: $gray;
            @include label;
        }

        &__info {
            display: flex;
            flex-direction: row;
            width: 100%;

            padding: vw(30) vw(30) vw(30) vw(21);

            &-img {
                min-width: vw(424);
                height: vw(286);

                border: 1px solid $borderColor;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &-descr {
                margin-left: vw(61);
                color: $gray;

                @include label;

                span {
                    font-weight: 600;
                    color: $black;
                }

                p {
                    margin-top: vw(10);
                    margin-bottom: vw(10);
                }

                h2, h3 {
                    @include title;
                    color: $black;
                }

                h3 {
                    margin-top: vw(20);
                    margin-bottom: vw(25);
                }
            }
        }
    }
</style>