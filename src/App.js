import * as React from 'react';
import {Admin,Resource,ListGuesser,EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from './Post';
import {PostList} from './PostList';
import {CreatePost} from './CreatePost';
//import { Dashboard } from "./dashboard";
const dataProvider = jsonServerProvider(
  'https://jsonplaceholder.typicode.com'
);


 const Dashboard = () => <h1>THis is the dashboard</h1>;
const App=()=> <Admin dashboard={Dashboard} dataProvider={dataProvider} >
  <Resource name="users" list={UserList}/>
  <Resource name="posts" list={PostList} edit={EditGuesser} create={CreatePost} />
</Admin>;
export default App;
