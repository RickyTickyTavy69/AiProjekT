export type AppRoutes = 'main' | 'create' | 'profile' | 'artDetails'| 'artCollection' |'notFound';

export const RoutePaths: Record<AppRoutes, string> = {
    main: '/',
    create: '/create',
    profile: '/profile',
    artCollection: '/artCollection/:userId',
    artDetails: '/artDetails/:artId',
    notFound: '*'
};
