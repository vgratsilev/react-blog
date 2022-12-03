import { FC, lazy } from 'react';

export const AdminPanelPageAsync = lazy<FC>(() =>
    import('./AdminPanelPage').then((component) => ({ default: component.AdminPanelPage })),
);
