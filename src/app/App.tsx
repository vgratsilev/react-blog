import { Suspense, useEffect } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMounted, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
