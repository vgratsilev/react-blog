## Entity User

User - entity about user. His username, avatar, roles.

#### Public API

- Types
  - `IUser` - type to describe User.
  - `IUserSchema` - user schema, used to create app store schema.

- Selectors
  - `getUserMounted` - selector to check if user already loaded.
  - `getUserAuthData` - selector to get user authorization data.
  - `getUserRoles` - selector to get information about user roles.
  - `isUserAdmin` - selector to check is the user has admin role.
  - `isUserManager` - selector to check is the user has manager role.

- Constants
  - `UserRole` - types of user roles (user, admin, manager, etc).
