import Profile from './components/Profile.vue'
export default {
    mode: 'history',
    base: '/laravelvue/',
    fallback: true,
    routes: [
        {
            path: '/',
            component: Profile,
            name: Profile
        }
    ]
}