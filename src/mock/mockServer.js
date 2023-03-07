import Mock from 'mockjs'

import index from './index.json'
import menuList from './menuList.json'
Mock.mock('/mock/index',{code: 200,data: index})
Mock.mock('/mock/menuList/1',{code: 200,data: menuList})
Mock.mock('/mock/menuList/2',{code: 200,data: menuList})
Mock.mock('/mock/menuList/3',{code: 200,data: menuList})
Mock.mock('/mock/menuList/4',{code: 200,data: menuList})