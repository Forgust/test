import React from 'react'
import { Route, Router } from 'react-router-dom'
import { MainLayout } from '../MainLayout'
import { Layout } from 'antd'

export const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </Router>
  )
}
