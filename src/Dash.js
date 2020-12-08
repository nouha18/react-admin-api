import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { UserList } from "./Post";
import { PostList } from "./PostList";
import { PostEdit } from "./EditPost";
import { PostCreate } from "./CreatePost";
import { Dashboard } from "./dashBoard";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export const Dash = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  );
   