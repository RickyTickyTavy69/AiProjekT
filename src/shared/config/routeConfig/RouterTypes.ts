export type AppRoutes = 'main' | 'create' | 'profile' | 'search' | 'list' | 'notFound';

export const RoutePaths: Record<AppRoutes, string> = {
    main: '/',
    list: '/list',
    create: '/create',
    profile: '/profile',
    search: '/search',
    notFound: '*'
};
