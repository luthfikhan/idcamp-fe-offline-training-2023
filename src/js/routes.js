import DashboardPage from './views/pages/dashboard';
import CreateNotePage from './views/pages/notes/create';
import LoginPage from './views/pages/auth/login';
import RegisterPage from './views/pages/auth/register';
import BookmarkPage from './views/pages/bookmark';


const routes = {
  '/': DashboardPage, // default page
  '/dashboard': DashboardPage, // default page
  '/note/create': CreateNotePage,
  '/bookmark': BookmarkPage,

  // Auth
  '/login': LoginPage,
  '/register': RegisterPage,
};

export default routes;
