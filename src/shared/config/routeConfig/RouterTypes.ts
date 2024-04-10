export type AppRoutes = 'main' | 'create' | 'profile' | 'signUp' | 'search' | 'list' | 'notFound';

export const RoutePaths: Record<AppRoutes, string> = {
    main: '/',
    list: '/list',
    create: '/create',
    profile: '/profile',
    search: '/search',
    signUp: '/signUp',
    notFound: '*'
};