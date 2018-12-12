import React from 'react'
import $ from 'jquery';


import Navbar from './navbar.jsx';
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

const App = () => (
    <div>
        <Navbar />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App