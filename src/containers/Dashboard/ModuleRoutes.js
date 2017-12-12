import asyncComponent from "../AsyncComponent";

const AsyncDashboard = asyncComponent(() => import("./MainDashboard"));

// User Management 
const AsyncUser = asyncComponent(() => import("./UserManagement"));
const AsyncUserCreate = asyncComponent(() => import("./UserManagement/UserManagementCreate"));
const AsyncUserUpdate = asyncComponent(() => import("./UserManagement/UserManagementUpdate"));
const AsyncUserView = asyncComponent(() => import("./UserManagement/UserManagementView"));

//User Profile

const AsyncUserProfile = asyncComponent(() => import("./UserProfile"));
const AsyncUserProfileUpdate = asyncComponent(() => import("./UserProfile/UserProfileUpdate"));
const AsyncUserProfileChangePassword = asyncComponent(() => import("./UserProfile/UserProfileChangePassword")); 

const ModuleRoutes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    exact: true,
    access: true,
    component: AsyncDashboard,
  },
  {
    name: 'User Management',
    path: '/user-management',
    exact: true,
    access: true,
    component: AsyncUser,
    subRoute: [
      {
        name: 'User Create',
        path: 'create',
        exact: true,
        access: true,
        component: AsyncUserCreate,
      },{
        name: 'User Update',
        path: 'update',
        exact: true,
        access: true,
        component: AsyncUserUpdate,
      },  {
        name: 'User View',
        path: 'view',
        exact: true,
        access: true,
        component: AsyncUserView,
      },
    ]
  },
  

  //User Profile
  {
    name: 'User Profile',
    path: '/user-profile',
    exact: true,
    access: true,
    component: AsyncUserProfile,
    subRoute: [
      {
        name: 'Update User Profile',
        path: 'update',
        exact: true,
        access: true,
        component: AsyncUserProfileUpdate,
      },{
        name: 'Change Password',
        path: 'change-password',
        exact: true,
        access: true,
        component: AsyncUserProfileChangePassword,
      },
    ]
  },
  
  
  
]

export default ModuleRoutes