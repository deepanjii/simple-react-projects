/* @flow */
import Link from '@mui/material/Link';
import React from 'react';
import type { Node } from 'react';

const Dashboard = (): Node => (
  <div>
    <h3>Dashboard updated</h3>
    <div>
      <Link href="todo">Todo</Link>
    </div>
  </div>
);

export default Dashboard;
